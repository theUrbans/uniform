import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uLinkCss = "a{cursor:pointer;display:block;font-size:1.25rem;line-height:1.75rem;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;text-decoration:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.primary{--tw-text-opacity:1;color:rgba(2, 132, 199, var(--tw-text-opacity))}.secondary{--tw-text-opacity:1;color:rgba(71, 85, 105, var(--tw-text-opacity))}";

let ULink = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.target = 'self';
    this.secondary = false;
  }
  render() {
    return (h("a", { href: this.link, target: `_${this.target}`, class: { primary: !this.secondary, secondary: this.secondary } }, h("slot", null)));
  }
  static get style() { return uLinkCss; }
};
ULink = /*@__PURE__*/ proxyCustomElement(ULink, [1, "u-link", {
    "link": [1],
    "target": [1],
    "secondary": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-link"];
  components.forEach(tagName => { switch (tagName) {
    case "u-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ULink);
      }
      break;
  } });
}

export { ULink as U, defineCustomElement as d };
