import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uCardimageCss = "img{display:block}";

let UCardimage$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", null, h("img", { src: this.src, style: {
        width: this.width,
        height: this.height
      } })));
  }
  static get style() { return uCardimageCss; }
};
UCardimage$1 = /*@__PURE__*/ proxyCustomElement(UCardimage$1, [1, "u-cardimage", {
    "src": [1],
    "height": [1],
    "width": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-cardimage"];
  components.forEach(tagName => { switch (tagName) {
    case "u-cardimage":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCardimage$1);
      }
      break;
  } });
}

const UCardimage = UCardimage$1;
const defineCustomElement = defineCustomElement$1;

export { UCardimage, defineCustomElement };
