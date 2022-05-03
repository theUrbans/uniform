import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './u-button2.js';
import { d as defineCustomElement$2 } from './u-modal2.js';

const uDialogDesktopCss = ":host{display:block}.body{padding:0.5rem}.actions{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0.5rem}";

const uDialogMobileCss = ".content{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%}";

let UDialog$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.name = 'u-dialog-default';
    this.open = false;
    this.title = 'u-dialog title';
    this.content = '';
    this.buttons = [{ title: 'OK' }];
  }
  openDialog(e) {
    const { params } = e.detail;
    // if (name === this.name) this.open = true;
    this.title = params.title || '';
    this.content = params.content || '';
    this.buttons = params.buttons || [{ title: 'OK' }];
    this.modal.showModal(this.name);
  }
  render() {
    return (h(Host, null, h("u-modal", { name: this.name, ref: (modal) => (this.modal = modal), resizeable: false, moveable: false, closeOnClick: false }, h("span", { slot: "header" }, this.title), h("div", { slot: "body", class: "body" }, h("p", null, this.content), h("div", { class: "actions" }, this.buttons.map((action) => (h("u-button", { design: action.design || 'secondary', outline: true, onClick: action.handler
        ? action.handler
        : () => this.modal.closeModal(this.name) }, action.title))))))));
  }
  static get style() { return {
    desktop: uDialogDesktopCss,
    mobile: uDialogMobileCss
  }; }
};
UDialog$1 = /*@__PURE__*/ proxyCustomElement(UDialog$1, [33, "u-dialog", {
    "name": [1],
    "open": [32],
    "title": [32],
    "content": [32],
    "buttons": [32]
  }, [[16, "open-dialog", "openDialog"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-dialog", "u-button", "u-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "u-dialog":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UDialog$1);
      }
      break;
    case "u-button":
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

const UDialog = UDialog$1;
const defineCustomElement = defineCustomElement$1;

export { UDialog, defineCustomElement };
