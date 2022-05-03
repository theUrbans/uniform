import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uToggleCss = ":host{display:block}";

let UToggle$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uToggleCss; }
};
UToggle$1 = /*@__PURE__*/ proxyCustomElement(UToggle$1, [1, "u-toggle"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-toggle"];
  components.forEach(tagName => { switch (tagName) {
    case "u-toggle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UToggle$1);
      }
      break;
  } });
}

const UToggle = UToggle$1;
const defineCustomElement = defineCustomElement$1;

export { UToggle, defineCustomElement };
