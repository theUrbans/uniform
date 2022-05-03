import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uContainerCss = ":host{display:block}";

let UContainer$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uContainerCss; }
};
UContainer$1 = /*@__PURE__*/ proxyCustomElement(UContainer$1, [1, "u-container"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-container"];
  components.forEach(tagName => { switch (tagName) {
    case "u-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UContainer$1);
      }
      break;
  } });
}

const UContainer = UContainer$1;
const defineCustomElement = defineCustomElement$1;

export { UContainer, defineCustomElement };
