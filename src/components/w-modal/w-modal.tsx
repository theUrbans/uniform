import { Component, h, Prop, Method, Listen, State, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'w-modal',
  styleUrls: {
    desktop: 'w-modal.desktop.css',
    mobile: 'w-modal.mobile.css',
  },
  shadow: true,
})
export class WModal {
  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() closeOnClick: boolean = true;
  @Prop() topRightClose: boolean = false;
  @Prop() moveable: boolean = true;
  @Prop() resetPosition: boolean = true;
  @Prop() resizeable: boolean = true;
  @Prop({ reflect: true }) mode: 'desktop' | 'mobile' = 'desktop';
  @Prop() minWidth: string = 'auto';
  @Prop() minHeight: string = 'auto';
  @Prop() maxHeight: string = 'auto';
  @Prop() maxWidth: string = 'auto';
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
    if (name === this.name) {
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }
  @Method()
  async closeModal(name: string): Promise<void> {
    if (name === this.name) {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    }
    if (this.resetPosition) this.initPosition();
  }

  private async initPosition() {
    const modal = this.node;
    if (!modal) return;
    modal.style.removeProperty('top');
    modal.style.removeProperty('left');
    modal.style.removeProperty('width');
    modal.style.removeProperty('height');
  }

  private handleCloseClick = (_e: MouseEvent) => {
    this.closeModal(this.name);
  };

  private handleBlur = e => {
    if (!e.target.className.includes('wrapper') || !this.closeOnClick) return;
    this.closeModal(this.name);
  };

  @State() drag: boolean = false;
  @State() dragoffset: { x: number; y: number };
  private node: HTMLElement;
  private handleStartDrag = (e: MouseEvent) => {
    if (!this.moveable) return;
    e.preventDefault();
    this.drag = true;
    this.dragoffset = { x: e.pageX - this.node.offsetLeft, y: e.pageY - this.node.offsetTop };
  };
  private mouseUp = _e => {
    this.drag = false;
  };
  private handleMove = (e: MouseEvent) => {
    if (!this.drag || !this.node || !this.moveable) return;
    let newtop: string = '0px';
    let newleft: string = '0px';

    if (e.pageX - this.dragoffset.x < 0) newleft = '0px';
    else if (e.pageX - this.dragoffset.x + this.node.clientWidth > window.innerWidth) newleft = `${window.innerWidth - this.node.clientWidth}px`;
    else newleft = `${e.pageX - this.dragoffset.x}px`;

    if (e.pageY - this.dragoffset.y < 0) newtop = '0px';
    else if (e.pageY - this.dragoffset.y + this.node.clientHeight > window.innerHeight) newtop = `${window.innerHeight - this.node.clientHeight}px`;
    else newtop = `${e.pageY - this.dragoffset.y}px`;

    this.node.style.left = newleft;
    this.node.style.top = newtop;
  };

  @State() isResizing: boolean = false;
  @State() startSize: { x: number; y: number };
  @State() startMouse: { x: number; y: number };

  render() {
    return (
      <div
        class={{
          wrapper: true,
          visible: this.isOpen,
        }}
        onMouseDown={e => this.handleBlur(e)}
        onMouseMove={e => this.handleMove(e)}
        onMouseUp={e => this.mouseUp(e)}
        onClick={e => e.preventDefault()}
      >
        {this.topRightClose ? (
          <button class="close backdrop__close" onClick={this.handleCloseClick}>
            &times;
          </button>
        ) : null}
        <div
          class={{
            modal: true,
            resizeable: this.resizeable,
          }}
          id="modal"
          ref={node => (this.node = node)}
          style={{
            'min-width': this.minWidth,
            'min-height': this.minHeight,
            'max-width': this.maxWidth,
            'max-height': this.maxHeight,
          }}
        >
          <div class="header" onMouseDown={e => this.handleStartDrag(e)}>
            <span class="header__title">
              <slot name="header" />
            </span>
            <button class="close header__close" onClick={this.handleCloseClick}>
              &times;
            </button>
          </div>
          <div
            class={{
              content: true,
            }}
          >
            <div
              style={{
                'min-width': this.minWidth,
                'min-height': this.minHeight,
                'max-width': this.maxWidth,
                'max-height': this.maxHeight,
              }}
            >
              <slot name="body"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
