import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uDatepickerCss = ":host{display:block}";

let UDatepicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uDatepickerCss; }
};
UDatepicker$1 = /*@__PURE__*/ proxyCustomElement(UDatepicker$1, [1, "u-datepicker"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-datepicker"];
  components.forEach(tagName => { switch (tagName) {
    case "u-datepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UDatepicker$1);
      }
      break;
  } });
}

const UDatepicker = UDatepicker$1;
const defineCustomElement = defineCustomElement$1;

export { UDatepicker, defineCustomElement };
