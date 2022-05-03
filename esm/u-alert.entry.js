import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uAlertCss = ":host{display:block}";

let UAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
UAlert.style = uAlertCss;

export { UAlert as u_alert };
