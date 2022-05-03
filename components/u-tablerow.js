import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './u-checkbox2.js';
import { d as defineCustomElement$2 } from './u-tablecell2.js';

const uTablerowCss = ":host{display:block}";

let UTablerow$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("tr", null, h("u-tablecell", null)));
  }
  static get style() { return uTablerowCss; }
};
UTablerow$1 = /*@__PURE__*/ proxyCustomElement(UTablerow$1, [1, "u-tablerow"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-tablerow", "u-checkbox", "u-tablecell"];
  components.forEach(tagName => { switch (tagName) {
    case "u-tablerow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTablerow$1);
      }
      break;
    case "u-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-tablecell":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UTablerow = UTablerow$1;
const defineCustomElement = defineCustomElement$1;

export { UTablerow, defineCustomElement };
