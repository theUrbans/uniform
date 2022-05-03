import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uLabelCss = ":host{display:block}";

let ULabel$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uLabelCss; }
};
ULabel$1 = /*@__PURE__*/ proxyCustomElement(ULabel$1, [1, "u-label"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-label"];
  components.forEach(tagName => { switch (tagName) {
    case "u-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ULabel$1);
      }
      break;
  } });
}

const ULabel = ULabel$1;
const defineCustomElement = defineCustomElement$1;

export { ULabel, defineCustomElement };
