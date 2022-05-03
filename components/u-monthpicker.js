import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uMonthpickerCss = ":host{display:block}";

let UMonthpicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uMonthpickerCss; }
};
UMonthpicker$1 = /*@__PURE__*/ proxyCustomElement(UMonthpicker$1, [1, "u-monthpicker"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-monthpicker"];
  components.forEach(tagName => { switch (tagName) {
    case "u-monthpicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UMonthpicker$1);
      }
      break;
  } });
}

const UMonthpicker = UMonthpicker$1;
const defineCustomElement = defineCustomElement$1;

export { UMonthpicker, defineCustomElement };
