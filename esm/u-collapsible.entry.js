import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-4f6a2e7b.js';

const uCollapsibleCss = ":host{position:relative;width:100%}.spoiler{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;background-color:rgba(226, 232, 240, var(--tw-bg-opacity));color:rgba(50, 50, 50, var(--tw-text-opacity));-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;font-weight:600;padding:0.375rem;letter-spacing:0.025em;grid-gap:1rem;gap:1rem}.spoiler:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored);--tw-bg-opacity:1;background-color:rgba(203, 213, 225, var(--tw-bg-opacity))}.closed{border-radius:0.75rem}.opened{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem}.chevron{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-rotate:-90deg;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.turn180{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.small{font-size:0.875rem;line-height:1.25rem}.medium{font-size:1rem;line-height:1.5rem}.large{font-size:1.125rem;line-height:1.75rem}.content{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(226, 232, 240, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(100, 116, 139, var(--tw-text-opacity));-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;max-height:0;overflow:hidden;-webkit-transition:max-height 0.2s ease-out;transition:max-height 0.2s ease-out;border-style:none;border-bottom-right-radius:0.75rem;border-bottom-left-radius:0.75rem;border-style:solid;border-width:2px}.content:hover{--tw-border-opacity:1;border-color:rgba(203, 213, 225, var(--tw-border-opacity));--tw-shadow-color:rgba(226, 232, 240, 1);--tw-shadow:var(--tw-shadow-colored)}.botradius.closed{border-bottom-right-radius:0.75rem;border-bottom-left-radius:0.75rem;border-top-left-radius:0px;border-top-right-radius:0px}.botradius.opened{border-radius:0px}.topradius{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem;border-bottom-right-radius:0px;border-bottom-left-radius:0px}.noradius{border-radius:0px}.topradius+.content,.noradius+.content{border-radius:0px}.topradius+.content,.noradius+.content,.botradius+.content{border-style:none}";

let UCollapsible = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.uOpen = createEvent(this, "uOpen", 7);
    this.uClose = createEvent(this, "uClose", 7);
    /**
     * set the size of the spoiler
     */
    this.size = 'medium';
    this.isOpen = false;
    this.handleOnClick = () => {
      this.isOpen ? this.close() : this.open();
    };
  }
  /**
   * method to close collapsible
   */
  async closeCollapsible() {
    this.close();
  }
  /**
   * method to open collapsible
   */
  async openCollapsible() {
    this.open();
  }
  open() {
    this.isOpen = true;
    const spoiler = this.el.shadowRoot.querySelector('#collapsible');
    const content = spoiler.nextElementSibling;
    content.style.opacity = '1';
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.style.borderStyle = 'solid';
    this.uOpen.emit();
  }
  close() {
    this.isOpen = false;
    const spoiler = this.el.shadowRoot.querySelector('#collapsible');
    const content = spoiler.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.opacity = '0';
      content.style.borderStyle = 'none';
      content.style.maxHeight = null;
    }
    this.uClose.emit();
  }
  render() {
    return (h(Host, null, h("div", { id: "collapsible", class: {
        spoiler: true,
        opened: this.isOpen,
        closed: !this.isOpen,
        [this.size]: true
      }, onClick: this.handleOnClick }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: { chevron: true, turn180: this.isOpen }, fill: "none", viewBox: "0 0 24 24", width: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, height: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, stroke: "currentColor" }, h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, d: "M19 9l-7 7-7-7" })), h("span", null, this.label)), h("div", { class: "content", style: { opacity: '0' } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
UCollapsible.style = uCollapsibleCss;

export { UCollapsible as u_collapsible };
