'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uToggleCss = ":host{display:block}";

let UToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UToggle.style = uToggleCss;

exports.u_toggle = UToggle;
