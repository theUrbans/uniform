'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uLayoutCss = ":host{display:block}";

let ULayout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, this.mode === 'mobile' ? (index.h("u-mobilelayout", { ref: (mobile) => (this.mobilelayout = mobile) }, index.h("div", { slot: "menu" }, index.h("slot", { name: "menu" })), index.h("div", { slot: "main" }, index.h("slot", { name: "main" })), index.h("div", { slot: "option" }, index.h("slot", { name: "option" })))) : (index.h("u-desktoplayout", null, index.h("div", { slot: "menu" }, index.h("slot", { name: "menu" })), index.h("div", { slot: "main" }, index.h("slot", { name: "main" })), index.h("u-modal", { name: "uniform-layout-option" }, index.h("slot", { name: "option" }))))));
  }
};
ULayout.style = uLayoutCss;

exports.u_layout = ULayout;
