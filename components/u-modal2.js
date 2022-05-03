import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const uModalDesktopCss = ".wrapper{--tw-bg-opacity:1;background-color:rgba(34, 34, 34, var(--tw-bg-opacity));--tw-bg-opacity:0.8;display:none;height:100vh;position:absolute;top:0px;left:0px;width:100%;z-index:9997}.visible{display:-ms-grid;display:grid;place-items:center}.modal{position:absolute;width:auto;max-width:80%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;z-index:9998;-webkit-animation:0.5s fadeIn;animation:0.5s fadeIn}.close{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:9999px;font-weight:700;height:1.5rem;text-align:center;vertical-align:middle;width:1.5rem;border:none;cursor:pointer;z-index:9998}.close:hover{--tw-bg-opacity:1;background-color:rgba(239, 68, 68, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.backdrop__close{position:absolute;top:12px;right:12px}.header{--tw-bg-opacity:1;background-color:rgba(107, 114, 128, var(--tw-bg-opacity));border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:2.5rem;padding-left:0.5rem;padding-right:0.5rem;--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity));font-size:1.5em;font-weight:600}.content{height:100%;position:relative;background:#fff;z-index:9999;overflow-x:auto}.resizeable{overflow:hidden;resize:both}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:translateY(50px) scale(0.9);transform:translateY(50px) scale(0.9)}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:translateY(50px) scale(0.9);transform:translateY(50px) scale(0.9)}100%{opacity:1}}";

const uModalMobileCss = ".wrapper{--tw-bg-opacity:1;background-color:rgba(34, 34, 34, var(--tw-bg-opacity));--tw-bg-opacity:0.8;height:100vh;max-height:0px;position:absolute;bottom:0px;left:0px;width:100%;z-index:9997;display:none;-webkit-backdrop-filter:blur(5px) brightness(0.8);backdrop-filter:blur(5px) brightness(0.8)}.visible{display:grid;place-items:center;max-height:100vh}.modal{max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content;position:absolute;bottom:0px;width:100%;z-index:9998;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-transition-timing-function:cubic-bezier(0, 1, 0.5, 1);transition-timing-function:cubic-bezier(0, 1, 0.5, 1);-webkit-animation:0.5s fadeIn;animation:0.5s fadeIn}.close{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:9999px;font-weight:700;height:1.5rem;text-align:center;vertical-align:middle;width:1.5rem;border:none;cursor:pointer;z-index:9998}.close:hover{--tw-bg-opacity:1;background-color:rgba(239, 68, 68, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.backdrop__close{position:absolute;top:12px;right:12px}.header{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:2rem;padding:10px 10px 20px 10px;font-size:1.5em;font-weight:600}.content{position:relative;top:-12px;height:calc(100% - 2rem);background:#fff;border-radius:5px;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.2);box-shadow:0 0 10px rgba(0, 0, 0, 0.2);z-index:9999;margin-bottom:-12px;overflow-x:auto}.resizeable{resize:both;overflow:hidden}@-webkit-keyframes fadeIn{0%{max-height:0}100%{max-height:100vh}}@keyframes fadeIn{0%{max-height:0}100%{max-height:100vh}}";

let UModal = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.beforeOpen = createEvent(this, "beforeOpen", 7);
    /**
     * should the modal be closed on backdrop click
     */
    this.closeOnClick = true;
    /**
     * display a close button in the top right corner
     */
    this.topRightClose = false;
    /**
     * (DESKTOP only) should the modal be moveable by dragging the header
     */
    this.moveable = true;
    /**
     * (DESKTOP only) reset the modal position to the center of the screen
     */
    this.resetPosition = true;
    /**
     * (DESKTOP only) should the modal be resizable
     */
    this.resizeable = true;
    /**
     * autoset mode for mobile or desktop
     */
    this.mode = 'desktop';
    /**
     * (DESKTOP only) resizable min width
     */
    this.minWidth = 'auto';
    /**
     * (DESKTOP only) resizable min height
     */
    this.minHeight = 'auto';
    /**
     * (DESKTOP only) resizable max width
     */
    this.maxHeight = 'auto';
    /**
     * (DESKTOP only) resizable max height
     */
    this.maxWidth = 'auto';
    this.isOpen = false;
    this.handleCloseClick = (_e) => {
      this.closeModal(this.name);
    };
    this.handleBlur = (e) => {
      if (!e.target.className.includes('wrapper') || !this.closeOnClick)
        return;
      this.closeModal(this.name);
    };
    this.drag = false;
    this.handleStartDrag = (e) => {
      if (!this.moveable)
        return;
      e.preventDefault();
      this.drag = true;
      this.dragoffset = {
        x: e.pageX - this.node.offsetLeft,
        y: e.pageY - this.node.offsetTop
      };
    };
    this.mouseUp = () => {
      this.drag = false;
    };
    this.handleMove = (e) => {
      if (!this.drag || !this.node || !this.moveable)
        return;
      let newtop = '0px';
      let newleft = '0px';
      if (e.pageX - this.dragoffset.x < 0)
        newleft = '0px';
      else if (e.pageX - this.dragoffset.x + this.node.clientWidth >
        window.innerWidth)
        newleft = `${window.innerWidth - this.node.clientWidth}px`;
      else
        newleft = `${e.pageX - this.dragoffset.x}px`;
      if (e.pageY - this.dragoffset.y < 0)
        newtop = '0px';
      else if (e.pageY - this.dragoffset.y + this.node.clientHeight >
        window.innerHeight)
        newtop = `${window.innerHeight - this.node.clientHeight}px`;
      else
        newtop = `${e.pageY - this.dragoffset.y}px`;
      this.node.style.left = newleft;
      this.node.style.top = newtop;
    };
  }
  showModalHandler(e) {
    const { name, params } = e.detail;
    this.beforeOpen.emit(params);
    console.log('show modal', name);
    this.showModal(name);
  }
  closeModalHandler(e) {
    const { name } = e.detail;
    this.closeModal(name);
  }
  setParams(params) {
    this.params = params.detail;
  }
  /**
   * method to open the modal
   */
  async showModal(name) {
    if (name === this.name) {
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }
  /**
   * method to close the modal
   */
  async closeModal(name) {
    if (name === this.name) {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    }
    if (this.resetPosition)
      this.initPosition();
  }
  async initPosition() {
    const modal = this.node;
    if (!modal)
      return;
    modal.style.removeProperty('top');
    modal.style.removeProperty('left');
    modal.style.removeProperty('width');
    modal.style.removeProperty('height');
  }
  render() {
    return (h("div", { class: {
        wrapper: true,
        visible: this.isOpen
      }, onPointerDown: (e) => this.handleBlur(e), onPointerMove: (e) => this.handleMove(e), onPointerUp: () => this.mouseUp(), onClick: (e) => e.preventDefault() }, this.topRightClose && (h("button", { class: "close backdrop__close", onClick: this.handleCloseClick }, "\u00D7")), h("div", { class: {
        modal: true,
        resizeable: this.resizeable
      }, id: "modal", ref: (node) => (this.node = node), style: {
        'min-width': this.minWidth,
        'min-height': this.minHeight,
        'max-width': this.maxWidth,
        'max-height': this.maxHeight
      } }, h("div", { class: "header", onPointerDown: (e) => this.handleStartDrag(e) }, h("span", { class: "header__title" }, h("slot", { name: "header" })), h("button", { class: "close header__close", onClick: this.handleCloseClick }, "\u00D7")), h("div", { class: {
        content: true
      } }, h("div", { style: {
        'min-width': this.minWidth,
        'min-height': this.minHeight,
        'max-width': this.maxWidth,
        'max-height': this.maxHeight,
        visibility: this.isOpen ? 'visible' : 'hidden'
      } }, h("slot", { name: "body" }))))));
  }
  get el() { return this; }
  static get style() { return {
    desktop: uModalDesktopCss,
    mobile: uModalMobileCss
  }; }
};
UModal = /*@__PURE__*/ proxyCustomElement(UModal, [33, "u-modal", {
    "name": [1],
    "closeOnClick": [4, "close-on-click"],
    "topRightClose": [4, "top-right-close"],
    "moveable": [4],
    "resetPosition": [4, "reset-position"],
    "resizeable": [4],
    "mode": [513],
    "minWidth": [1, "min-width"],
    "minHeight": [1, "min-height"],
    "maxHeight": [1, "max-height"],
    "maxWidth": [1, "max-width"],
    "isOpen": [32],
    "params": [32],
    "drag": [32],
    "dragoffset": [32],
    "showModal": [64],
    "closeModal": [64]
  }, [[8, "show-modal", "showModalHandler"], [8, "close-modal", "closeModalHandler"], [0, "beforeOpen", "setParams"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "u-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UModal);
      }
      break;
  } });
}

export { UModal as U, defineCustomElement as d };
