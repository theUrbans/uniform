import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uSliderCss = ":host{display:block}";

let USlider$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return uSliderCss; }
};
USlider$1 = /*@__PURE__*/ proxyCustomElement(USlider$1, [1, "u-slider"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-slider"];
  components.forEach(tagName => { switch (tagName) {
    case "u-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, USlider$1);
      }
      break;
  } });
}

const USlider = USlider$1;
const defineCustomElement = defineCustomElement$1;

export { USlider, defineCustomElement };
