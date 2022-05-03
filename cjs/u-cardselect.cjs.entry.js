'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uCardselectCss = ":host{display:block}";

let UCardselect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
UCardselect.style = uCardselectCss;

exports.u_cardselect = UCardselect;
