import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uRowCss = ".sc-u-row-h{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;width:100%}";

let URow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  setStyle() {
    if (this.container) {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat( ${this.gutter}, minmax(0, 1fr))`
      };
    }
    return {};
  }
  render() {
    return (h(Host, { style: Object.assign(Object.assign({}, this.setStyle()), {
        // alignItems: this.align,
        // justifyContent: this.justify,
        // flexWrap: this.wrap,
        gap: this.gap, padding: `${this.padding}`
      }) }, h("slot", null)));
  }
};
URow.style = uRowCss;

export { URow as u_row };
