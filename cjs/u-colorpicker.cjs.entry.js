'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uColorpickerCss = ":host{display:block}";

let UColorpicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("input", { type: "color" })));
  }
};
UColorpicker.style = uColorpickerCss;

exports.u_colorpicker = UColorpicker;
