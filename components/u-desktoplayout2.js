import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './u-grid2.js';

const uDesktoplayoutCss = ".menu{height:100%}.main{height:100%;overflow-x:auto;overflow-y:hidden}";

let UDesktoplayout = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("u-grid", { columns: ['6rem', '1fr'], rows: 1, area: [['menu', 'main']], width: "100%", height: "100vh" }, h("section", { class: "menu", style: {
        gridArea: 'menu'
      } }, h("slot", { name: "menu" })), h("section", { class: "main", style: {
        gridArea: 'main'
      } }, h("slot", { name: "main" }))));
  }
  static get style() { return uDesktoplayoutCss; }
};
UDesktoplayout = /*@__PURE__*/ proxyCustomElement(UDesktoplayout, [1, "u-desktoplayout"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-desktoplayout", "u-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "u-desktoplayout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UDesktoplayout);
      }
      break;
    case "u-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { UDesktoplayout as U, defineCustomElement as d };
