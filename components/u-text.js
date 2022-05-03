import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uTextCss = ":host{display:block}";

let UText$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * font size: string, e.g. '12px', '1rem'. Default is '1rem'.
     */
    this.size = '1rem';
    /**
     * font weight: string, e.g. 'bold'. Default is 'normal'.
     */
    this.weight = 'normal';
    /**
     * font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white).
     */
    this.color = '#fff';
  }
  render() {
    return (h("span", { style: {
        fontSize: this.size,
        fontWeight: this.weight,
        color: this.color,
        textTransform: this.transform
      } }, h("slot", null)));
  }
  static get style() { return uTextCss; }
};
UText$1 = /*@__PURE__*/ proxyCustomElement(UText$1, [1, "u-text", {
    "size": [1],
    "weight": [1],
    "transform": [1],
    "color": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-text"];
  components.forEach(tagName => { switch (tagName) {
    case "u-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UText$1);
      }
      break;
  } });
}

const UText = UText$1;
const defineCustomElement = defineCustomElement$1;

export { UText, defineCustomElement };
