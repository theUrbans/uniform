import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './u-desktoplayout2.js';
import { d as defineCustomElement$4 } from './u-grid2.js';
import { d as defineCustomElement$3 } from './u-mobilelayout2.js';
import { d as defineCustomElement$2 } from './u-modal2.js';

const uLayoutCss = ":host{display:block}";

let ULayout$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  onWindowResize() {
    if (window.innerWidth <= 768)
      this.mode = 'mobile';
    else
      this.mode = 'desktop';
  }
  componentWillLoad() {
    this.onWindowResize();
  }
  async showOption() {
    if (this.mode === 'mobile') {
      this.mobilelayout.activateOption();
      this.mobilelayout.showOption();
    }
    if (this.mode === 'desktop') {
      document.dispatchEvent(new CustomEvent('show-modal', {
        detail: { name: 'uniform-layout-option' }
      }));
    }
  }
  async closeOption() {
    if (this.mode === 'mobile') {
      this.mobilelayout.showMain();
      this.mobilelayout.disableOption();
    }
    if (this.mode === 'desktop') {
      document.dispatchEvent(new CustomEvent('close-modal', {
        detail: { name: 'uniform-layout-option' }
      }));
    }
  }
  render() {
    return (h(Host, null, this.mode === 'mobile' ? (h("u-mobilelayout", { ref: (mobile) => (this.mobilelayout = mobile) }, h("div", { slot: "menu" }, h("slot", { name: "menu" })), h("div", { slot: "main" }, h("slot", { name: "main" })), h("div", { slot: "option" }, h("slot", { name: "option" })))) : (h("u-desktoplayout", null, h("div", { slot: "menu" }, h("slot", { name: "menu" })), h("div", { slot: "main" }, h("slot", { name: "main" })), h("u-modal", { name: "uniform-layout-option" }, h("slot", { name: "option" }))))));
  }
  static get style() { return uLayoutCss; }
};
ULayout$1 = /*@__PURE__*/ proxyCustomElement(ULayout$1, [1, "u-layout", {
    "mode": [32],
    "showOption": [64],
    "closeOption": [64]
  }, [[9, "resize", "onWindowResize"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-layout", "u-desktoplayout", "u-grid", "u-mobilelayout", "u-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "u-layout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ULayout$1);
      }
      break;
    case "u-desktoplayout":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "u-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "u-mobilelayout":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ULayout = ULayout$1;
const defineCustomElement = defineCustomElement$1;

export { ULayout, defineCustomElement };
