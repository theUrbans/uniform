import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

let UCardbody$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h("slot", null);
  }
};
UCardbody$1 = /*@__PURE__*/ proxyCustomElement(UCardbody$1, [1, "u-cardbody"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-cardbody"];
  components.forEach(tagName => { switch (tagName) {
    case "u-cardbody":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCardbody$1);
      }
      break;
  } });
}

const UCardbody = UCardbody$1;
const defineCustomElement = defineCustomElement$1;

export { UCardbody, defineCustomElement };
