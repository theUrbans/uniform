import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uLayoutCss = ":host{display:block}";

let ULayout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
ULayout.style = uLayoutCss;

export { ULayout as u_layout };
