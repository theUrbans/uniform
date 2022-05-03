import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uCardselectCss = ":host{display:block}";

let UCardselect$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uCardselectCss; }
};
UCardselect$1 = /*@__PURE__*/ proxyCustomElement(UCardselect$1, [1, "u-cardselect"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-cardselect"];
  components.forEach(tagName => { switch (tagName) {
    case "u-cardselect":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCardselect$1);
      }
      break;
  } });
}

const UCardselect = UCardselect$1;
const defineCustomElement = defineCustomElement$1;

export { UCardselect, defineCustomElement };
