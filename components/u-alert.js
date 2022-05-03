import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './u-button2.js';
import { d as defineCustomElement$3 } from './u-modal2.js';
import { d as defineCustomElement$2 } from './u-paragraph2.js';

const uAlertCss = ":host{display:block}";

let UAlert$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.name = 'u-alert-default';
    this.closeText = 'close';
    this.open = false;
    this.title = 'Alert';
    this.content = '';
  }
  openDialog(e) {
    const { params } = e.detail;
    this.title = params.title || '';
    this.content = params.content || '';
    this.modal.showModal(this.name);
  }
  render() {
    return (h(Host, null, h("u-modal", { name: this.name, ref: (modal) => (this.modal = modal), resizeable: false, moveable: false, closeOnClick: false }, h("span", { slot: "header" }, this.title), h("div", { slot: "body", class: "body" }, h("u-paragraph", null, this.content)), h("div", { class: "action" }, h("u-button", { outline: true, design: "error" }, this.closeText)))));
  }
  static get style() { return uAlertCss; }
};
UAlert$1 = /*@__PURE__*/ proxyCustomElement(UAlert$1, [1, "u-alert", {
    "name": [1],
    "closeText": [1, "close-text"],
    "open": [32],
    "title": [32],
    "content": [32]
  }, [[16, "show-alert", "openDialog"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-alert", "u-button", "u-modal", "u-paragraph"];
  components.forEach(tagName => { switch (tagName) {
    case "u-alert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UAlert$1);
      }
      break;
    case "u-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "u-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-paragraph":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UAlert = UAlert$1;
const defineCustomElement = defineCustomElement$1;

export { UAlert, defineCustomElement };
