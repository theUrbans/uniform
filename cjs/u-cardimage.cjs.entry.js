'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uCardimageCss = "img{display:block}";

let UCardimage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("img", { src: this.src, style: {
        width: this.width,
        height: this.height
      } })));
  }
};
UCardimage.style = uCardimageCss;

exports.u_cardimage = UCardimage;
