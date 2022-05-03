'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uRowCss = ".sc-u-row-h{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;width:100%}";

let URow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: "row", style: {
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
      } }, index.h("slot", null)));
  }
};
URow.style = uRowCss;

exports.u_row = URow;
