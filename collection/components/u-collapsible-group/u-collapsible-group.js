import { Component, Host, h, Element, Prop } from '@stencil/core';
/**
 * @name Collapsible Group
 * @state 🟢
 * @description group collapsible elements
 * @slot default - collapsible elements
 */
export class UCollapsibleGroup {
  constructor() {
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
    return (h(Host, { role: "group" },
      h("slot", null)));
  }
  static get is() { return "u-collapsible-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-collapsible-group.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-collapsible-group.css"]
  }; }
  static get properties() { return {
    "onlyOneOpen": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "if true, only one collapsible can be open at a time"
      },
      "attribute": "only-one-open",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get elementRef() { return "el"; }
}
