import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uDatetimepickerCss = ":host{display:block}";

let UDatetimepicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uDatetimepickerCss; }
};
UDatetimepicker$1 = /*@__PURE__*/ proxyCustomElement(UDatetimepicker$1, [1, "u-datetimepicker"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-datetimepicker"];
  components.forEach(tagName => { switch (tagName) {
    case "u-datetimepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UDatetimepicker$1);
      }
      break;
  } });
}

const UDatetimepicker = UDatetimepicker$1;
const defineCustomElement = defineCustomElement$1;

export { UDatetimepicker, defineCustomElement };
