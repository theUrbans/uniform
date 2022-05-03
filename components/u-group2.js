import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uGroupCss = ".row{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;height:100%;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;grid-gap:0px;gap:0px}.column{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch;justify-items:stretch;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;grid-gap:0px;gap:0px}";

let UGroup = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * direction of the group
     */
    this.direction = 'row';
  }
  render() {
    return (h("div", { class: {
        [this.direction]: true
      } }, h("slot", null)));
  }
  static get style() { return uGroupCss; }
};
UGroup = /*@__PURE__*/ proxyCustomElement(UGroup, [1, "u-group", {
    "direction": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-group"];
  components.forEach(tagName => { switch (tagName) {
    case "u-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UGroup);
      }
      break;
  } });
}

export { UGroup as U, defineCustomElement as d };
