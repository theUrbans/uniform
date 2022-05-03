import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uNavbarCss = ":host{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity));width:100%}.top{padding:1rem;position:absolute;top:0px;width:100%}.bottom{padding:1rem;position:absolute;bottom:0px;width:100%}.fixed{position:fixed}";

let UNavbar$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     *  position of the navbar
     */
    this.position = 'top';
    /**
     * should the navbar be fixed to the top or bottom of the screen -
     * layout should be position relative
     */
    this.fixed = true;
  }
  render() {
    return (h(Host, { role: "navigation", class: {
        [this.position]: true,
        fixed: this.fixed
      } }, h("slot", null)));
  }
  static get style() { return uNavbarCss; }
};
UNavbar$1 = /*@__PURE__*/ proxyCustomElement(UNavbar$1, [1, "u-navbar", {
    "position": [1],
    "fixed": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-navbar"];
  components.forEach(tagName => { switch (tagName) {
    case "u-navbar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UNavbar$1);
      }
      break;
  } });
}

const UNavbar = UNavbar$1;
const defineCustomElement = defineCustomElement$1;

export { UNavbar, defineCustomElement };
