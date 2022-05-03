'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uMenuitemCss = "hr.sc-u-menuitem{margin:0px}li.sc-u-menuitem:hover{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity))}li.sc-u-menuitem{border-radius:0.25rem;cursor:pointer;padding:0.25rem;position:relative;white-space:nowrap}.more.sc-u-menuitem{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;grid-gap:0.25rem;gap:0.25rem}";

let UMenuitem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uItemSelect = index.createEvent(this, "uItemSelect", 7);
    this.active = false;
    this.depthLevel = 0;
  }
  render() {
    if (this.item.divider)
      return index.h("hr", null);
    return (index.h("li", null, this.item.subMenu ? ([
      index.h("div", { class: "more", onClick: () => {
          this.uItemSelect.emit(this.item);
          if (this.item.subMenu) {
            this.active = !this.active;
            return;
          }
          this.active = false;
        } }, index.h("span", null, this.item.name), index.h("span", null, " \u00BB")),
      index.h("u-submenu", { subMenu: this.item.subMenu.items, active: this.active, depthLevel: this.depthLevel })
    ]) : (index.h("span", null, this.item.name))));
  }
};
UMenuitem.style = uMenuitemCss;

exports.u_menuitem = UMenuitem;
