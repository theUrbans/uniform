import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uLoaderCss = ":host{display:block}";

let ULoader$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uLoaderCss; }
};
ULoader$1 = /*@__PURE__*/ proxyCustomElement(ULoader$1, [1, "u-loader"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "u-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ULoader$1);
      }
      break;
  } });
}

const ULoader = ULoader$1;
const defineCustomElement = defineCustomElement$1;

export { ULoader, defineCustomElement };
