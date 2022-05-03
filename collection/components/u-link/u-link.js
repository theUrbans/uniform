import { Component, h, Prop } from '@stencil/core';
/**
 * @name Link
 * @state 🟢
 */
export class ULink {
  constructor() {
    this.target = 'self';
    this.secondary = false;
  }
  render() {
    return (h("a", { href: this.link, target: `_${this.target}`, class: { primary: !this.secondary, secondary: this.secondary } },
      h("slot", null)));
  }
  static get is() { return "u-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-link.css"]
  }; }
  static get properties() { return {
    "link": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "link",
      "reflect": false
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'self'"
    },
    "secondary": {
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
        "text": ""
      },
      "attribute": "secondary",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
