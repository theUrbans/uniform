'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uHeadlineCss = ".sc-u-headline-h{display:block}h1.sc-u-headline{font-size:2.5rem;line-height:1.2;font-weight:700;margin:0}h2.sc-u-headline{font-size:2rem;line-height:1.2;font-weight:700;margin:0}h3.sc-u-headline{font-size:1.75rem;line-height:1.2;font-weight:700;margin:0}h4.sc-u-headline{font-size:1.5rem;line-height:1.2;font-weight:700;margin:0}h5.sc-u-headline{font-size:1.25rem;line-height:1.2;font-weight:700;margin:0}h6.sc-u-headline{font-size:1rem;line-height:1.2;font-weight:700;margin:0}";

let UHeadline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * headline level which should be used
     */
    this.level = 'h1';
  }
  render() {
    return (index.h(index.Host, null, index.h(this.level, null, index.h("slot", null, "Headline"))));
  }
};
UHeadline.style = uHeadlineCss;

exports.u_headline = UHeadline;
