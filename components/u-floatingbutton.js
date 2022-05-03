import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uFloatingbuttonCss = "button{border-radius:9999px;border-width:0px;cursor:pointer;display:-ms-grid;display:grid;place-content:center;height:3rem;line-height:1;position:absolute;width:3rem;z-index:100}.bottom-left{bottom:1rem;left:1rem}.bottom-right{bottom:1rem;right:1rem}.bottom-center{bottom:1rem;right:50%;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-x:50%}";

let UFloatingbutton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.color = 'lightpink';
    this.position = 'bottom-right';
  }
  render() {
    return (h("button", { class: {
        [this.position]: true
      }, style: {
        backgroundColor: this.color
      } }, h("slot", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" }, h("path", { fill: "none", d: "M0 0h24v24H0z" }), h("path", { d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))));
  }
  static get style() { return uFloatingbuttonCss; }
};
UFloatingbutton$1 = /*@__PURE__*/ proxyCustomElement(UFloatingbutton$1, [1, "u-floatingbutton", {
    "color": [1],
    "position": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-floatingbutton"];
  components.forEach(tagName => { switch (tagName) {
    case "u-floatingbutton":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UFloatingbutton$1);
      }
      break;
  } });
}

const UFloatingbutton = UFloatingbutton$1;
const defineCustomElement = defineCustomElement$1;

export { UFloatingbutton, defineCustomElement };
