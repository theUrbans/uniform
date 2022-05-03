'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uLinkCss = "a{cursor:pointer;display:block;font-size:1.25rem;line-height:1.75rem;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;text-decoration:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.primary{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.secondary{--tw-text-opacity:1;color:rgba(71, 85, 105, var(--tw-text-opacity))}";

let ULink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.target = 'self';
    this.secondary = false;
  }
  render() {
    return (index.h("a", { href: this.link, target: `_${this.target}`, class: { primary: !this.secondary, secondary: this.secondary } }, index.h("slot", null)));
  }
};
ULink.style = uLinkCss;

exports.u_link = ULink;
