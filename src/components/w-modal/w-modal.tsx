import { Component, h, Prop, Method, Listen, State, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'w-modal',
  styleUrl: 'w-modal.scss',
  shadow: true,
})
export class WModal {
  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() closeOnClick: boolean = true;
  @State() isOpen: boolean = false;
  @State() params: any;
  @Event() beforeOpen: EventEmitter;
  @Listen('show-modal', { target: 'body' }) showModalHandler(e: any) {
    const { name, params } = e.detail;
    this.beforeOpen.emit(params);
    this.showModal(name);
  }
  @Listen('close-modal', { target: 'body' }) closeModalHandler(e: any) {
    const { name } = e.detail;
    this.closeModal(name);
  }
  @Listen('beforeOpen') setParams(params: any) {
    this.params = params.detail;
  }
  @Method()
  async showModal(name: string): Promise<void> {
    if (name === this.name) this.isOpen = true;
  }
  @Method()
  async closeModal(name: string): Promise<void> {
    if (name === this.name) this.isOpen = false;
  }

  private handleCloseClick = () => {
    this.closeModal(this.name);
  };

  private handleBlur = e => {
    if (!e.target.className.includes('wrapper') || !this.closeOnClick) return;
    this.closeModal(this.name);
  };

  private startX: number = 0;
  private startY: number = 0;
  private drag: boolean = false;
  private node: HTMLElement;
  private handleStartDrag = e => {
    e.preventDefault();
    this.drag = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    console.log(this.startX, this.startY);
  };
  private mouseUp = _e => {
    this.drag = false;
  };
  private handleMove = e => {
    if (!this.drag) return;
    const x = e.clientX - this.startX;
    const y = e.clientY - this.startY;
    this.node.style.transform = `translate(${x}px, ${y}px)`;
  };

  render() {
    return (
      <div class={this.isOpen ? 'wrapper visible' : 'wrapper'} onMouseDown={e => this.handleBlur(e)} onMouseMove={e => this.handleMove(e)} onMouseUp={e => this.mouseUp(e)}>
        <button class="close backdrop__close" onClick={this.handleCloseClick}>
          ❌
        </button>
        <div class="modal" id="modal" ref={node => (this.node = node)}>
          <div class="resize"></div>
          <div class="header" onMouseDown={e => this.handleStartDrag(e)}>
            <span class="header__title">
              <slot name="header" />
            </span>
            <button class="close header__close" onClick={this.handleCloseClick}>
              ❌
            </button>
          </div>
          <div class="content">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    );
  }
}
