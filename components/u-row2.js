import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uRowCss = ".sc-u-row-h{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;width:100%}";

let URow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * flex justify-content
     */
    this.justify = 'start';
    /**
     * flex align-items
     */
    this.align = 'center';
    /**
     * flex wrap
     */
    this.wrap = 'wrap';
    /**
     * flex gap: string, e.g. '1rem', '1px'
     */
    this.gap = '1rem';
    /**
     * padding left and right: string, e.g. '1rem', '1px'
     */
    this.padding = '0';
    /**
     * flex width behaviour
     */
    this.width = 'full';
  }
  render() {
    return (h(Host, { class: "row", style: {
        alignItems: this.align,
        justifyContent: this.justify,
        flexWrap: this.wrap,
        gap: this.gap,
        padding: `${this.padding}`,
        width: this.width === 'full'
          ? '100%'
          : this.width === 'content'
            ? 'fit-content'
            : 'auto'
      } }, h("slot", null)));
  }
  static get style() { return uRowCss; }
};
URow = /*@__PURE__*/ proxyCustomElement(URow, [6, "u-row", {
    "justify": [1],
    "align": [1],
    "wrap": [1],
    "gap": [1],
    "padding": [1],
    "width": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-row"];
  components.forEach(tagName => { switch (tagName) {
    case "u-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, URow);
      }
      break;
  } });
}

export { URow as U, defineCustomElement as d };
