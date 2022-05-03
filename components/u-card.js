import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uCardCss = ".card{border-radius:1rem;border-width:1px;overflow:hidden;position:relative}";

let UCard$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * width of card: string, e.g. '12px', '20rem'. Default: '24rem'
     */
    this.width = '24rem';
    /**
     * color of card: string, e.g. '#000', 'black'. Default: '#9EBADE' (lightblue)
     */
    this.color = '#9EBADE';
  }
  render() {
    return (h("div", { class: "card", style: {
        backgroundColor: this.color,
        width: this.width
      } }, h("slot", null)));
  }
  static get style() { return uCardCss; }
};
UCard$1 = /*@__PURE__*/ proxyCustomElement(UCard$1, [1, "u-card", {
    "width": [1],
    "color": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-card"];
  components.forEach(tagName => { switch (tagName) {
    case "u-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCard$1);
      }
      break;
  } });
}

const UCard = UCard$1;
const defineCustomElement = defineCustomElement$1;

export { UCard, defineCustomElement };
