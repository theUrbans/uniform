'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uCardheaderCss = ":host{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%}div.overlap{position:absolute;z-index:1}div{margin:0px;padding:0.5rem}";

let UCardheader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * header overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (index.h("div", { class: {
        overlap: this.overlap
      } }, index.h("slot", null)));
  }
};
UCardheader.style = uCardheaderCss;

exports.u_cardheader = UCardheader;
