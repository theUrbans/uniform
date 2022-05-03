import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uMobilelayoutCss = ".layout{display:-ms-flexbox;display:flex;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-snap-stop:always;overflow-x:auto;scroll-behavior:smooth;height:100vh;width:100vw;-ms-overflow-style:none;scrollbar-width:none}.layout::-webkit-scrollbar{display:none}.section{display:block;height:100%;-ms-flex-negative:0;flex-shrink:0}.menu{scroll-snap-align:start;-webkit-box-shadow:inset 2px 0px 12px 2px rgba(0, 0, 0, 0.75);box-shadow:inset 2px 0px 12px 2px rgba(0, 0, 0, 0.75)}.main{width:100%;height:100%;scroll-snap-align:center;overflow-y:auto}.option{scroll-snap-align:end;-webkit-box-shadow:inset 2px 0px 12px -2px rgba(0, 0, 0, 0.75);box-shadow:inset 2px 0px 12px -2px rgba(0, 0, 0, 0.75)}";

let UMobilelayout = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
  static get style() { return uMobilelayoutCss; }
};
UMobilelayout = /*@__PURE__*/ proxyCustomElement(UMobilelayout, [1, "u-mobilelayout", {
    "showOptions": [1028, "show-options"],
    "sideWidth": [1, "side-width"],
    "showMenu": [64],
    "showMain": [64],
    "showOption": [64],
    "activateOption": [64],
    "disableOption": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-mobilelayout"];
  components.forEach(tagName => { switch (tagName) {
    case "u-mobilelayout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UMobilelayout);
      }
      break;
  } });
}

export { UMobilelayout as U, defineCustomElement as d };
