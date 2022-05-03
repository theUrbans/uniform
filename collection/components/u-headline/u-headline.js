import { Component, h, Host, Prop } from '@stencil/core';
/**
 * @name Headline
 * @state 🟡
 */
export class UHeadline {
  constructor() {
    /**
     * headline level which should be used
     */
    this.level = 'h1';
  }
  render() {
    return (h(Host, null,
      h(this.level, null,
        h("slot", null, "Headline"))));
  }
  static get is() { return "u-headline"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["u-headline.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-headline.css"]
  }; }
  static get properties() { return {
    "level": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
        "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "headline level which should be used"
      },
      "attribute": "level",
      "reflect": false,
      "defaultValue": "'h1'"
    }
  }; }
}
