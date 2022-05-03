'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uLoaderCss = ":host{display:block}";

let ULoader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ULoader.style = uLoaderCss;

exports.u_loader = ULoader;
