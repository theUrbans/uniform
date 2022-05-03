import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uWeekpickerCss = ":host{display:block}";

let UWeekpicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uWeekpickerCss; }
};
UWeekpicker$1 = /*@__PURE__*/ proxyCustomElement(UWeekpicker$1, [1, "u-weekpicker"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-weekpicker"];
  components.forEach(tagName => { switch (tagName) {
    case "u-weekpicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UWeekpicker$1);
      }
      break;
  } });
}

const UWeekpicker = UWeekpicker$1;
const defineCustomElement = defineCustomElement$1;

export { UWeekpicker, defineCustomElement };
