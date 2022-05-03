import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uTableheadCss = ":host{display:block}";

let UTablehead$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uTableheadCss; }
};
UTablehead$1 = /*@__PURE__*/ proxyCustomElement(UTablehead$1, [1, "u-tablehead"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-tablehead"];
  components.forEach(tagName => { switch (tagName) {
    case "u-tablehead":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTablehead$1);
      }
      break;
  } });
}

const UTablehead = UTablehead$1;
const defineCustomElement = defineCustomElement$1;

export { UTablehead, defineCustomElement };
