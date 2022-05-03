'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uListCss = ".x{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.y{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}";

let UList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * list as row(x) or as column(y)
     */
    this.alignment = 'y';
  }
  render() {
    return (index.h("ul", { class: { [this.alignment]: true } }, index.h("slot", null)));
  }
};
UList.style = uListCss;

exports.u_list = UList;
