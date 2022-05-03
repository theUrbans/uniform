import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uFormCss = "form.sc-u-form{border-radius:1rem;--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-style:solid;border-width:2px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;max-width:75rem;padding:1rem;grid-gap:1rem;gap:1rem}";

let UForm$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("form", { onSubmit: (e) => e.preventDefault() }, h("slot", null)));
  }
  static get style() { return uFormCss; }
};
UForm$1 = /*@__PURE__*/ proxyCustomElement(UForm$1, [6, "u-form"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-form"];
  components.forEach(tagName => { switch (tagName) {
    case "u-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UForm$1);
      }
      break;
  } });
}

const UForm = UForm$1;
const defineCustomElement = defineCustomElement$1;

export { UForm, defineCustomElement };
