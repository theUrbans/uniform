import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uHeadlineCss = ".sc-u-headline-h{display:block}h1.sc-u-headline{font-size:2.5rem;line-height:1.2;font-weight:700;margin:0}h2.sc-u-headline{font-size:2rem;line-height:1.2;font-weight:700;margin:0}h3.sc-u-headline{font-size:1.75rem;line-height:1.2;font-weight:700;margin:0}h4.sc-u-headline{font-size:1.5rem;line-height:1.2;font-weight:700;margin:0}h5.sc-u-headline{font-size:1.25rem;line-height:1.2;font-weight:700;margin:0}h6.sc-u-headline{font-size:1rem;line-height:1.2;font-weight:700;margin:0}";

let UHeadline$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * headline level which should be used
     */
    this.level = 'h1';
  }
  render() {
    return (h(Host, null, h(this.level, null, h("slot", null, "Headline"))));
  }
  static get style() { return uHeadlineCss; }
};
UHeadline$1 = /*@__PURE__*/ proxyCustomElement(UHeadline$1, [6, "u-headline", {
    "level": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-headline"];
  components.forEach(tagName => { switch (tagName) {
    case "u-headline":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UHeadline$1);
      }
      break;
  } });
}

const UHeadline = UHeadline$1;
const defineCustomElement = defineCustomElement$1;

export { UHeadline, defineCustomElement };
