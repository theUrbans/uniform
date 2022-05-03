import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uProgressCss = ".progress{--tw-bg-opacity:1;background-color:rgba(252, 165, 165, var(--tw-bg-opacity));border-radius:0.75rem;-webkit-transition-property:all;-o-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms}.frame{border-radius:0.75rem}.progress div{display:-ms-grid;display:grid;place-content:center;height:100%;padding-left:1.25rem;padding-right:1.25rem;white-space:nowrap;width:100%}.border{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(156, 163, 175, var(--tw-border-opacity));border-style:solid;border-width:1px}";

let UProgress$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Maximum of values
     */
    this.max = 100;
    /**
     * Value used to calculate progress
     */
    this.value = 100;
    /**
     * Size of height of the bar, standard set to 1.25rem. Possible to use any unit.
     */
    this.height = '1.25rem';
    /**
     * Remove border.
     */
    this.borderless = false;
    /**
     * Enables text, which shows the percentage.
     */
    this.showPercentage = true;
  }
  valueChange() {
    // this.value = newValue;
    this.calcProgress();
  }
  calcProgress() {
    this.setProgress(String(((this.value * 100) / this.max).toFixed(2)));
  }
  setProgress(value) {
    this.progressResult = value;
  }
  render() {
    this.calcProgress();
    return (h("div", null, h("div", { class: { frame: true, border: !this.borderless } }, h("div", { class: "progress", style: {
        width: `${this.progressResult}%`,
        height: this.height
      } }, this.showPercentage ? (h("div", null, " ", this.progressResult, " %")) : (h("div", null, h("slot", null)))))));
  }
  static get watchers() { return {
    "value": ["valueChange"]
  }; }
  static get style() { return uProgressCss; }
};
UProgress$1 = /*@__PURE__*/ proxyCustomElement(UProgress$1, [1, "u-progress", {
    "max": [2],
    "value": [2],
    "height": [1],
    "borderless": [4],
    "showPercentage": [4, "show-percentage"],
    "progressResult": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "u-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UProgress$1);
      }
      break;
  } });
}

const UProgress = UProgress$1;
const defineCustomElement = defineCustomElement$1;

export { UProgress, defineCustomElement };
