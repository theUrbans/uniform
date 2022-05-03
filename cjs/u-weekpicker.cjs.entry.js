'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uWeekpickerCss = ":host{display:block}";

let UWeekpicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UWeekpicker.style = uWeekpickerCss;

exports.u_weekpicker = UWeekpicker;
