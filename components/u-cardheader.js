import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uCardheaderCss = ":host{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%}div.overlap{position:absolute;z-index:1}div{margin:0px;padding:0.5rem}";

let UCardheader$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * header overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (h("div", { class: {
        overlap: this.overlap
      } }, h("slot", null)));
  }
  static get style() { return uCardheaderCss; }
};
UCardheader$1 = /*@__PURE__*/ proxyCustomElement(UCardheader$1, [1, "u-cardheader", {
    "overlap": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-cardheader"];
  components.forEach(tagName => { switch (tagName) {
    case "u-cardheader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCardheader$1);
      }
      break;
  } });
}

const UCardheader = UCardheader$1;
const defineCustomElement = defineCustomElement$1;

export { UCardheader, defineCustomElement };
