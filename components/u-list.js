import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uListCss = ".x{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.y{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}";

let UList$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * list as row(x) or as column(y)
     */
    this.alignment = 'y';
  }
  render() {
    return (h("ul", { class: { [this.alignment]: true } }, h("slot", null)));
  }
  static get style() { return uListCss; }
};
UList$1 = /*@__PURE__*/ proxyCustomElement(UList$1, [4, "u-list", {
    "alignment": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-list"];
  components.forEach(tagName => { switch (tagName) {
    case "u-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UList$1);
      }
      break;
  } });
}

const UList = UList$1;
const defineCustomElement = defineCustomElement$1;

export { UList, defineCustomElement };
