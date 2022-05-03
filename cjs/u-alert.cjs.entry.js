'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uAlertCss = ":host{display:block}";

let UAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("u-modal", { name: this.name, ref: (modal) => (this.modal = modal), resizeable: false, moveable: false, closeOnClick: false }, index.h("span", { slot: "header" }, this.title), index.h("div", { slot: "body", class: "body" }, index.h("u-paragraph", null, this.content)), index.h("div", { class: "action" }, index.h("u-button", { outline: true, design: "error" }, this.closeText)))));
  }
};
UAlert.style = uAlertCss;

exports.u_alert = UAlert;
