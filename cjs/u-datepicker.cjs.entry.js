'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uDatepickerCss = ":host{display:block}";

let UDatepicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UDatepicker.style = uDatepickerCss;

exports.u_datepicker = UDatepicker;
