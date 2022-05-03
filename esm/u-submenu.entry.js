import { r as registerInstance, c as createEvent, h } from './index-4f6a2e7b.js';

const uSubmenuCss = ".sub.sc-u-submenu{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-radius:0.5rem;display:none;list-style-type:none;margin:0px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;padding:0.5rem;position:absolute}.sub.show.sc-u-submenu{display:block}.sub.submenu.sc-u-submenu{margin-left:0.75rem;position:absolute;left:100%;top:0px}";

let USubmenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
USubmenu.style = uSubmenuCss;

export { USubmenu as u_submenu };
