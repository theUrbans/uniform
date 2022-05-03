import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uTermsCss = ":host{display:block}";

let UTerms$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uTermsCss; }
};
UTerms$1 = /*@__PURE__*/ proxyCustomElement(UTerms$1, [1, "u-terms"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-terms"];
  components.forEach(tagName => { switch (tagName) {
    case "u-terms":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTerms$1);
      }
      break;
  } });
}

const UTerms = UTerms$1;
const defineCustomElement = defineCustomElement$1;

export { UTerms, defineCustomElement };
