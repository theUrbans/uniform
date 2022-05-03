import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uItemCss = ":host{display:block}";

let UItem$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uItemCss; }
};
UItem$1 = /*@__PURE__*/ proxyCustomElement(UItem$1, [1, "u-item"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-item"];
  components.forEach(tagName => { switch (tagName) {
    case "u-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UItem$1);
      }
      break;
  } });
}

const UItem = UItem$1;
const defineCustomElement = defineCustomElement$1;

export { UItem, defineCustomElement };
