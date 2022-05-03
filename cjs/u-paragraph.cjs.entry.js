'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uParagraphCss = ":host{display:block}";

let UParagraph = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.textAlignLast = 'none';
  }
  render() {
    return (index.h("p", { style: {
        color: this.color,
        backgroundColor: this.backgroundColor,
        hyphens: this.hyphens,
        textAlign: this.textAlign,
        textAlignLast: this.textAlignLast
      } }, index.h("slot", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum animi amet quas perspiciatis? Dolores, tempore necessitatibus impedit deleniti laudantium facere facilis, sint quo, minus velit sit quibusdam hic. Rem?")));
  }
};
UParagraph.style = uParagraphCss;

exports.u_paragraph = UParagraph;
