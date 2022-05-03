'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uTimepickerCss = ":host{display:block}";

let UTimepicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UTimepicker.style = uTimepickerCss;

exports.u_timepicker = UTimepicker;
