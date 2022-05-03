import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uColorpickerCss = ":host{display:block}";

let UColorpicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("input", { type: "color" })));
  }
  static get style() { return uColorpickerCss; }
};
UColorpicker$1 = /*@__PURE__*/ proxyCustomElement(UColorpicker$1, [1, "u-colorpicker"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-colorpicker"];
  components.forEach(tagName => { switch (tagName) {
    case "u-colorpicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UColorpicker$1);
      }
      break;
  } });
}

const UColorpicker = UColorpicker$1;
const defineCustomElement = defineCustomElement$1;

export { UColorpicker, defineCustomElement };
