import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const uSubmenuCss = ".sub.sc-u-submenu{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:0.5rem;display:none;list-style-type:none;margin:0px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;padding:0.5rem;position:absolute}.sub.show.sc-u-submenu{display:block}.sub.submenu.sc-u-submenu{margin-left:0.75rem;position:absolute;left:100%;top:0px}";

let USubmenu = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.uOpenSubMenu = createEvent(this, "uOpenSubMenu", 7);
    this.active = false;
    this.depthLevel = 0;
  }
  onActiveChange() {
    this.uOpenSubMenu.emit({ menu: this.subMenu, open: this.active });
  }
  render() {
    return (h("ul", { class: {
        sub: true,
        submenu: true,
        show: this.active
      } }, this.subMenu.map((item) => (h("u-menuitem", { item: item, active: false, depthLevel: this.depthLevel + 1 })))));
  }
  static get watchers() { return {
    "active": ["onActiveChange"]
  }; }
  static get style() { return uSubmenuCss; }
};
USubmenu = /*@__PURE__*/ proxyCustomElement(USubmenu, [2, "u-submenu", {
    "subMenu": [16],
    "active": [1028],
    "depthLevel": [2, "depth-level"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-submenu", "u-menuitem", "u-submenu"];
  components.forEach(tagName => { switch (tagName) {
    case "u-submenu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, USubmenu);
      }
      break;
    case "u-menuitem":
      if (!customElements.get(tagName)) {
        defineCustomElement();
      }
      break;
    case "u-submenu":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

const uMenuitemCss = "hr.sc-u-menuitem{margin:0px}li.sc-u-menuitem:hover{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity))}li.sc-u-menuitem{border-radius:0.25rem;cursor:pointer;padding:0.25rem;position:relative;white-space:nowrap}.more.sc-u-menuitem{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;grid-gap:0.25rem;gap:0.25rem}";

let UMenuitem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.uItemSelect = createEvent(this, "uItemSelect", 7);
    this.active = false;
    this.depthLevel = 0;
  }
  render() {
    if (this.item.divider)
      return h("hr", null);
    return (h("li", null, this.item.subMenu ? ([
      h("div", { class: "more", onClick: () => {
          this.uItemSelect.emit(this.item);
          if (this.item.subMenu) {
            this.active = !this.active;
            return;
          }
          this.active = false;
        } }, h("span", null, this.item.name), h("span", null, " \u00BB")),
      h("u-submenu", { subMenu: this.item.subMenu.items, active: this.active, depthLevel: this.depthLevel })
    ]) : (h("span", null, this.item.name))));
  }
  static get style() { return uMenuitemCss; }
};
UMenuitem = /*@__PURE__*/ proxyCustomElement(UMenuitem, [2, "u-menuitem", {
    "item": [16],
    "active": [1028],
    "depthLevel": [2, "depth-level"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-menuitem", "u-menuitem", "u-submenu"];
  components.forEach(tagName => { switch (tagName) {
    case "u-menuitem":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UMenuitem);
      }
      break;
    case "u-menuitem":
      if (!customElements.get(tagName)) {
        defineCustomElement();
      }
      break;
    case "u-submenu":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { UMenuitem as U, defineCustomElement as a, USubmenu as b, defineCustomElement$1 as d };
