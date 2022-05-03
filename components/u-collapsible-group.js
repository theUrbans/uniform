import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uCollapsibleGroupCss = ":host{display:block;width:100%}";

let UCollapsibleGroup$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * if true, only one collapsible can be open at a time
     */
    this.onlyOneOpen = true;
  }
  componentDidRender() {
    const children = Array.from(this.el.children);
    for (let index = 0, len = children.length; index < len; index += 1) {
      const element = children[index];
      const el = element.shadowRoot.childNodes[1];
      if (index === 0)
        el.classList.add('topradius');
      if (index > 0 && index < len - 1)
        el.classList.add('noradius');
      if (index === len - 1)
        el.classList.add('botradius');
      element.addEventListener('uOpen', () => {
        this.closeInactive(element, children);
      });
    }
  }
  closeInactive(element, children) {
    if (this.onlyOneOpen) {
      for (let index = 0, len = children.length; index < len; index += 1) {
        const actEl = children[index];
        if (element !== actEl)
          actEl.closeCollapsible();
      }
    }
  }
  render() {
    return (h(Host, { role: "group" }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return uCollapsibleGroupCss; }
};
UCollapsibleGroup$1 = /*@__PURE__*/ proxyCustomElement(UCollapsibleGroup$1, [1, "u-collapsible-group", {
    "onlyOneOpen": [4, "only-one-open"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-collapsible-group"];
  components.forEach(tagName => { switch (tagName) {
    case "u-collapsible-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCollapsibleGroup$1);
      }
      break;
  } });
}

const UCollapsibleGroup = UCollapsibleGroup$1;
const defineCustomElement = defineCustomElement$1;

export { UCollapsibleGroup, defineCustomElement };
