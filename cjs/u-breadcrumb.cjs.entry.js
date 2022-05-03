'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uBreadcrumbCss = "ul{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;list-style-type:none;margin:0px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;padding:0px;grid-gap:0.5rem;gap:0.5rem}.last{font-size:1.25rem;line-height:1.75rem}.separator{font-weight:800;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity));vertical-align:middle}";

let UBreadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uBreadcrumbClick = index.createEvent(this, "uBreadcrumbClick", 7);
    this.items = [
      { name: 'test1', link: '/test' },
      { name: 'test2' },
      { name: 'test3' }
    ];
  }
  render() {
    return (index.h("ul", null, this.items.map((item, index$1) => {
      const lastElement = index$1 === this.items.length - 1;
      return [
        index.h("li", null, !lastElement ? (index.h("u-link", Object.assign({ secondary: true, onClick: () => this.uBreadcrumbClick.emit(item.name) }, (item.link ? { link: item.link } : null)), item.name)) : (index.h("span", { class: "last" }, item.name))),
        index.h("span", { class: "separator", style: {
            display: !lastElement ? 'inline-block' : 'none'
          } }, this.seperator ? this.seperator : index.h("i", null, "\u203A"))
      ];
    })));
  }
};
UBreadcrumb.style = uBreadcrumbCss;

exports.u_breadcrumb = UBreadcrumb;
