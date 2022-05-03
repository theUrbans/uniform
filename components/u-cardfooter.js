import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uCardfooterCss = "div.overlap{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));border-top-width:1px;display:block;height:auto;opacity:0.5;position:absolute;bottom:0px;width:25rem;z-index:1;border-top:solid black 1px}div{padding-left:0.5rem;padding-right:0.5rem}";

let UCardfooter$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * footer overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (h("div", { class: { overlap: this.overlap } }, h("slot", null)));
  }
  static get style() { return uCardfooterCss; }
};
UCardfooter$1 = /*@__PURE__*/ proxyCustomElement(UCardfooter$1, [1, "u-cardfooter", {
    "overlap": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-cardfooter"];
  components.forEach(tagName => { switch (tagName) {
    case "u-cardfooter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCardfooter$1);
      }
      break;
  } });
}

const UCardfooter = UCardfooter$1;
const defineCustomElement = defineCustomElement$1;

export { UCardfooter, defineCustomElement };
