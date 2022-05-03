import { r as registerInstance, h, H as Host, g as getElement } from './index-4f6a2e7b.js';

const uGridCss = ":host{display:-ms-grid;display:grid}";

let UGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
UGrid.style = uGridCss;

export { UGrid as u_grid };
