'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uLabelCss = ":host{display:block}";

let ULabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ULabel.style = uLabelCss;

exports.u_label = ULabel;
