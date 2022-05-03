import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './u-checkbox2.js';

const uTablecellCss = ":host{display:block}";

let UTablecell = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * should checkbox be rendered
     */
    this.checkbox = false;
  }
  render() {
    return (h("td", null, this.checkbox && h("u-checkbox", { size: "small" }), " ", this.data));
  }
  static get style() { return uTablecellCss; }
};
UTablecell = /*@__PURE__*/ proxyCustomElement(UTablecell, [1, "u-tablecell", {
    "checkbox": [4],
    "data": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-tablecell", "u-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "u-tablecell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTablecell);
      }
      break;
    case "u-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { UTablecell as U, defineCustomElement as d };
