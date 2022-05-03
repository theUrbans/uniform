import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uTimepickerCss = ":host{display:block}";

let UTimepicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uTimepickerCss; }
};
UTimepicker$1 = /*@__PURE__*/ proxyCustomElement(UTimepicker$1, [1, "u-timepicker"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-timepicker"];
  components.forEach(tagName => { switch (tagName) {
    case "u-timepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTimepicker$1);
      }
      break;
  } });
}

const UTimepicker = UTimepicker$1;
const defineCustomElement = defineCustomElement$1;

export { UTimepicker, defineCustomElement };
