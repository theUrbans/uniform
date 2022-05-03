import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uTablefootCss = ":host{display:block}";

let UTablefoot$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uTablefootCss; }
};
UTablefoot$1 = /*@__PURE__*/ proxyCustomElement(UTablefoot$1, [1, "u-tablefoot"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-tablefoot"];
  components.forEach(tagName => { switch (tagName) {
    case "u-tablefoot":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTablefoot$1);
      }
      break;
  } });
}

const UTablefoot = UTablefoot$1;
const defineCustomElement = defineCustomElement$1;

export { UTablefoot, defineCustomElement };
