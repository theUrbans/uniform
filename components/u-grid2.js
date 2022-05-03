import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uGridCss = ":host{display:-ms-grid;display:grid}";

let UGrid = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * optional naming of grid areas
     */
    this.area = [];
    /**
     * gap size
     */
    this.gap = '0';
    /**
     * height of grid
     */
    this.height = 'max-content';
    /**
     * width of grid
     */
    this.width = 'max-content';
  }
  formatColumns() {
    if (typeof this.columns === 'number') {
      return `repeat(${this.columns}, 1fr)`;
    }
    if (Array.isArray(this.columns)) {
      return this.columns.join(' ');
    }
    return 'repeat(12, 1fr)';
  }
  formatRows() {
    if (typeof this.rows === 'number') {
      return `repeat(${this.rows}, 1fr)`;
    }
    if (Array.isArray(this.rows)) {
      return this.rows.join(' ');
    }
    return 'repeat(2, 1fr)';
  }
  setAttributes() {
    if (!this.el)
      return;
    this.el.style.setProperty('display', 'grid');
    this.el.style.setProperty('width', this.width);
    this.el.style.setProperty('height', this.height);
    this.el.style.setProperty('gap', this.gap);
    this.el.style.setProperty('grid-template-columns', this.formatColumns());
    this.el.style.setProperty('grid-template-rows', this.formatRows());
    if (this.area.length === 0)
      return;
    const area = this.area.map((row) => `${row.join(' ')}`);
    this.el.style.setProperty('grid-template-areas', `"${area.join('" "')}"`);
  }
  componentDidLoad() {
    this.setAttributes();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return uGridCss; }
};
UGrid = /*@__PURE__*/ proxyCustomElement(UGrid, [1, "u-grid", {
    "columns": [2],
    "rows": [2],
    "area": [16],
    "gap": [1],
    "height": [1],
    "width": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "u-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UGrid);
      }
      break;
  } });
}

export { UGrid as U, defineCustomElement as d };
