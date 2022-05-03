import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uPopupCss = ".wrapper::before{content:'';height:200px;width:200px;background:#000;position:relative;z-index:10}.top{bottom:110%}.bottom{top:110%}.top.start{left:0}.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.end{right:0}.popup{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity));height:3rem;position:absolute;width:12.5rem}";

let UPopup$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.axis = 'y-center';
    this.visible = false;
    // @Watch('visible') visibleChanged() {}
    this.position = 'top';
    this.alignment = 'start';
  }
  calcPos() {
    const { x, y } = this.el.getBoundingClientRect();
    if (y > 200 && this.axis.includes('y'))
      this.position = 'top';
    else if (y < 200 && this.axis.includes('y'))
      this.position = 'bottom';
    else if (x > 200 && this.axis.includes('x'))
      this.position = 'left';
    else if (x < 200 && this.axis.includes('x'))
      this.position = 'right';
    if (this.axis.includes('start'))
      this.alignment = 'start';
    else if (this.axis.includes('end'))
      this.alignment = 'end';
    else
      this.alignment = 'center';
  }
  componentWillLoad() {
    this.calcPos();
    console.log(this.alignment);
  }
  render() {
    return (h("div", { class: {
        wrapper: true,
        popup: true,
        [this.position]: true,
        [this.alignment]: true
      }, tabindex: "0", onBlur: () => (this.visible = false), onMouseEnter: () => this.calcPos() }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return uPopupCss; }
};
UPopup$1 = /*@__PURE__*/ proxyCustomElement(UPopup$1, [1, "u-popup", {
    "axis": [1],
    "visible": [1028],
    "position": [32],
    "alignment": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-popup"];
  components.forEach(tagName => { switch (tagName) {
    case "u-popup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UPopup$1);
      }
      break;
  } });
}

const UPopup = UPopup$1;
const defineCustomElement = defineCustomElement$1;

export { UPopup, defineCustomElement };
