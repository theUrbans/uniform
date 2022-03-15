import { Component, h, Prop, Method, Listen, State, Event, EventEmitter, Element } from '@stencil/core';

/**
 * @name Modal
 * @state 🟡
 * @description A modal window that can be used to display information to the user.
 * @slot header - The header of the modal
 * @slot body - The body of the modal
 */
@Component({
  tag: 'u-modal',
  styleUrls: {
    desktop: 'u-modal.desktop.scss',
    mobile: 'u-modal.mobile.scss',
  },
  shadow: true,
})
export class UModal {
  @Element() el: HTMLElement;

  /**
   * name of the modal - needed to call methods
   */
  @Prop() name: string;

  /**
   * should the modal be closed on backdrop click
   */
  @Prop() closeOnClick: boolean = true;

  /**
   * display a close button in the top right corner
   */
  @Prop() topRightClose: boolean = false;

  /**
   * (DESKTOP only) should the modal be moveable by dragging the header
   */
  @Prop() moveable: boolean = true;

  /**
   * (DESKTOP only) reset the modal position to the center of the screen
   */
  @Prop() resetPosition: boolean = true;

  /**
   * (DESKTOP only) should the modal be resizable
   */
  @Prop() resizeable: boolean = true;

  /**
   * autoset mode for mobile or desktop
   */
  @Prop({ reflect: true }) mode: 'desktop' | 'mobile' = 'desktop';

  /**
   * (DESKTOP only) resizable min width
   */
  @Prop() minWidth: string = 'auto';

  /**
   * (DESKTOP only) resizable min height
   */
  @Prop() minHeight: string = 'auto';

  /**
   * (DESKTOP only) resizable max width
   */
  @Prop() maxHeight: string = 'auto';

  /**
   * (DESKTOP only) resizable max height
   */
  @Prop() maxWidth: string = 'auto';

  /**
   * event with given params
   */
  @Event() beforeOpen: EventEmitter<any>;

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

  /**
   * method to open the modal
   */
  @Method()
  async showModal(name: string): Promise<void> {
    if (name === this.name) {
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * method to close the modal
   */
  @Method()
  async closeModal(name: string): Promise<void> {
    if (name === this.name) {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    }
    if (this.resetPosition) this.initPosition();
  }

  @State() isOpen: boolean = false;
  @State() params: any;

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
  private mouseUp = () => {
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

  render() {
    return (
      <div
        class={{
          wrapper: true,
          visible: this.isOpen,
        }}
        onPointerDown={e => this.handleBlur(e)}
        onPointerMove={e => this.handleMove(e)}
        onPointerUp={() => this.mouseUp()}
        onClick={e => e.preventDefault()}
      >
        {this.topRightClose && (
          <button class="close backdrop__close" onClick={this.handleCloseClick}>
            &times;
          </button>
        )}
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
          <div class="header" onPointerDown={e => this.handleStartDrag(e)}>
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
                'visibility': this.isOpen ? 'visible' : 'hidden',
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
