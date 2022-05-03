'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uCardfooterCss = "div.overlap{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));border-top-width:1px;display:block;height:auto;opacity:0.5;position:absolute;bottom:0px;width:25rem;z-index:1;border-top:solid black 1px}div{padding-left:0.5rem;padding-right:0.5rem}";

let UCardfooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * footer overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (index.h("div", { class: { overlap: this.overlap } }, index.h("slot", null)));
  }
};
UCardfooter.style = uCardfooterCss;

exports.u_cardfooter = UCardfooter;
