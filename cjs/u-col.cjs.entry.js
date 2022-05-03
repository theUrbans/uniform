'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uColCss = ":host{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;width:100%}";

let UCol = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: "col", style: {
        alignItems: this.align,
        justifyContent: this.justify,
        flexWrap: this.wrap,
        gap: this.gap,
        padding: `${this.padding}`,
        gridArea: this.area
      } }, index.h("slot", null)));
  }
};
UCol.style = uColCss;

exports.u_col = UCol;
