import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uColCss = ":host{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;width:100%}";

let UCol = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * flex align-items: start | center | end | space-between | space-around | space-evenly
     */
    this.align = 'start';
    /**
     * flex justify-content: flex-start | flex-end | center | baseline | stretch
     */
    this.justify = 'center';
    /**
     * flex wrap: nowrap | wrap | wrap-reverse
     */
    this.wrap = 'wrap';
    /**
     * flex gap: string, e.g. '1rem', '1px'
     */
    this.gap = '1em';
    /**
     * padding bottom and top: string, e.g. '1rem', '1px'
     */
    this.padding = '0';
    /**
     * used with w-grid, set size based on number of columns on w-grid (default is 12)
     */
    this.size = 12;
    /**
     * use with w-grid to set area
     */
    this.area = '';
  }
  render() {
    return (h(Host, { class: "col", style: {
        alignItems: this.align,
        justifyContent: this.justify,
        flexWrap: this.wrap,
        gap: this.gap,
        padding: `${this.padding}`,
        gridArea: this.area
      } }, h("slot", null)));
  }
  static get style() { return uColCss; }
};
UCol = /*@__PURE__*/ proxyCustomElement(UCol, [1, "u-col", {
    "align": [1],
    "justify": [1],
    "wrap": [1],
    "gap": [1],
    "padding": [1],
    "size": [2],
    "area": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-col"];
  components.forEach(tagName => { switch (tagName) {
    case "u-col":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCol);
      }
      break;
  } });
}

export { UCol as U, defineCustomElement as d };
