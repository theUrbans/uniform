'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uDatetimepickerCss = ":host{display:block}";

let UDatetimepicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UDatetimepicker.style = uDatetimepickerCss;

exports.u_datetimepicker = UDatetimepicker;
