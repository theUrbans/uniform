'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uMenuCss = ".x{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;grid-gap:0.5rem;gap:0.5rem}.y{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;grid-gap:0.5rem;gap:0.5rem}ul{border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(71, 85, 105, var(--tw-bg-opacity));list-style-type:none;margin:0px;padding:0px;--tw-text-opacity:1;color:rgba(222, 226, 230, var(--tw-text-opacity))}.contentwidth{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.padding{padding:0.75rem !important}li{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}.item:hover{--tw-bg-opacity:1;background-color:rgba(100, 116, 139, var(--tw-bg-opacity))}.item{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;font-size:1.25rem;line-height:1.75rem;grid-gap:0.5rem;gap:0.5rem}.start{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.middle{border-radius:0px}.end{border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem}.rounded{border-radius:0.5rem}svg,i{height:1.5rem;width:1.5rem}";

let UMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.axis = 'y';
    this.width = 'fullwidth';
    this.padding = true;
    this.items = [
      {
        label: 'test1',
        icon: (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, index.h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })))
      },
      {
        label: 'test2',
        icon: (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, index.h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" })))
      }
    ];
  }
  render() {
    return (index.h("ul", { class: {
        [this.axis]: true,
        [this.width]: true,
        padding: this.padding
      } }, this.items.map((item, index$1) => {
      const row = [];
      const attr = null;
      if (item.icon)
        row.push(item.icon);
      if (item.disabled)
        attr.disabled = true;
      if (item.label)
        row.push(index.h("span", null, item.label));
      return (index.h("li", Object.assign({ class: {
          item: true,
          start: !this.padding && index$1 === 0,
          middle: !this.padding && index$1 > 0 && index$1 < this.items.length - 1,
          end: !this.padding && index$1 === this.items.length - 1,
          rounded: this.padding
        } }, attr), row));
    })));
  }
};
UMenu.style = uMenuCss;

exports.u_menu = UMenu;
