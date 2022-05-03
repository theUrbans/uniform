import { r as registerInstance, h, g as getElement } from './index-ac0beabc.js';

const uDesktoplayoutCss = ".menu{height:100%}.main{height:100%;overflow-x:auto;overflow-y:hidden}";

let UDesktoplayout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("u-grid", { columns: ['6rem', '1fr'], rows: 1, area: [['menu', 'main']], width: "100%", height: "100vh" }, h("section", { class: "menu", style: {
        gridArea: 'menu'
      } }, h("slot", { name: "menu" })), h("section", { class: "main", style: {
        gridArea: 'main'
      } }, h("slot", { name: "main" }))));
  }
};
UDesktoplayout.style = uDesktoplayoutCss;

const uMobilelayoutCss = ".layout{display:-ms-flexbox;display:flex;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-snap-stop:always;overflow-x:auto;scroll-behavior:smooth;height:100vh;width:100vw;-ms-overflow-style:none;scrollbar-width:none}.layout::-webkit-scrollbar{display:none}.section{display:block;height:100%;-ms-flex-negative:0;flex-shrink:0}.menu{scroll-snap-align:start;-webkit-box-shadow:inset 2px 0px 12px 2px rgba(0, 0, 0, 0.75);box-shadow:inset 2px 0px 12px 2px rgba(0, 0, 0, 0.75)}.main{width:100%;height:100%;scroll-snap-align:center;overflow-y:auto}.option{scroll-snap-align:end;-webkit-box-shadow:inset 2px 0px 12px -2px rgba(0, 0, 0, 0.75);box-shadow:inset 2px 0px 12px -2px rgba(0, 0, 0, 0.75)}";

let UMobilelayout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showOptions = false;
    this.sideWidth = '94%';
  }
  async showMenu() {
    const menu = this.el.shadowRoot.querySelector('.menu');
    if (!menu)
      return;
    menu.scrollIntoView();
  }
  async showMain() {
    const main = this.el.shadowRoot.querySelector('.main');
    if (!main)
      return;
    main.scrollIntoView();
  }
  async showOption() {
    const option = this.el.shadowRoot.querySelector('.option');
    if (!option)
      return;
    option.scrollIntoView();
  }
  async activateOption() {
    this.showOptions = true;
  }
  async disableOption() {
    this.showOptions = false;
  }
  componentDidLoad() {
    this.showMain();
  }
  render() {
    return (h("div", { class: "layout" }, h("section", { class: "section menu" }, h("slot", { name: "menu" })), h("section", { class: "section main", onClick: () => this.showMain() }, h("slot", { name: "main" })), this.showOptions && (h("section", { class: "section option", style: {
        width: this.sideWidth
      } }, h("slot", { name: "option" })))));
  }
  get el() { return getElement(this); }
};
UMobilelayout.style = uMobilelayoutCss;

export { UDesktoplayout as u_desktoplayout, UMobilelayout as u_mobilelayout };
