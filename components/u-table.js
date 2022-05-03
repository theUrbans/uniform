import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uTableCss = "";

let UTable$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * control border-collapse style
     */
    this.borderStyle = 'collapse';
    /**
     * control border-spacing styöe
     */
    this.borderSpacing = '0';
  }
  render() {
    return (h("table", { style: {
        borderCollapse: this.borderStyle,
        borderSpacing: this.borderSpacing
      } }));
  }
  static get style() { return uTableCss; }
};
UTable$1 = /*@__PURE__*/ proxyCustomElement(UTable$1, [1, "u-table", {
    "borderStyle": [1, "border-style"],
    "borderSpacing": [1, "border-spacing"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-table"];
  components.forEach(tagName => { switch (tagName) {
    case "u-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UTable$1);
      }
      break;
  } });
}

const UTable = UTable$1;
const defineCustomElement = defineCustomElement$1;

export { UTable, defineCustomElement };
