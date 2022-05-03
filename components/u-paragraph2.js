import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const uParagraphCss = ":host{display:block}";

let UParagraph = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.textAlignLast = 'none';
  }
  render() {
    return (h("p", { style: {
        color: this.color,
        backgroundColor: this.backgroundColor,
        hyphens: this.hyphens,
        textAlign: this.textAlign,
        textAlignLast: this.textAlignLast
      } }, h("slot", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum animi amet quas perspiciatis? Dolores, tempore necessitatibus impedit deleniti laudantium facere facilis, sint quo, minus velit sit quibusdam hic. Rem?")));
  }
  static get style() { return uParagraphCss; }
};
UParagraph = /*@__PURE__*/ proxyCustomElement(UParagraph, [1, "u-paragraph", {
    "color": [1],
    "backgroundColor": [1, "background-color"],
    "hyphens": [1],
    "textAlign": [1, "text-align"],
    "textAlignLast": [1, "text-align-last"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-paragraph"];
  components.forEach(tagName => { switch (tagName) {
    case "u-paragraph":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UParagraph);
      }
      break;
  } });
}

export { UParagraph as U, defineCustomElement as d };
