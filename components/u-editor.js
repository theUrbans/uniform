import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './u-textarea2.js';

const uEditorCss = ":host{display:block;position:relative}.toolbar{position:absolute}";

let UEditor$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("div", { class: "toolbar" }, h("w-group", null, h("w-button", { outline: true, design: "secondary", rounded: "left" }, "a"), h("w-button", { outline: true, design: "secondary", rounded: "none" }, "b"), h("w-button", { outline: true, design: "secondary", rounded: "right" }, "c"))), h("u-textarea", null)));
  }
  static get style() { return uEditorCss; }
};
UEditor$1 = /*@__PURE__*/ proxyCustomElement(UEditor$1, [1, "u-editor", {
    "tools": [16],
    "edits": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-editor", "u-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "u-editor":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UEditor$1);
      }
      break;
    case "u-textarea":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UEditor = UEditor$1;
const defineCustomElement = defineCustomElement$1;

export { UEditor, defineCustomElement };
