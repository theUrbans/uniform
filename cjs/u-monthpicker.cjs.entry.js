'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uMonthpickerCss = ":host{display:block}";

let UMonthpicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UMonthpicker.style = uMonthpickerCss;

exports.u_monthpicker = UMonthpicker;
