import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uTabsCss = ":host{display:block}";

let UTabs$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uTabsCss; }
};
UTabs$1 = /*@__PURE__*/ proxyCustomElement(UTabs$1, [1, "u-tabs"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "u-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTabs$1);
      }
      break;
  } });
}

const UTabs = UTabs$1;
const defineCustomElement = defineCustomElement$1;

export { UTabs, defineCustomElement };
