import { Component, h, Prop } from '@stencil/core';
/**
 * @name Table Cell
 * @state 🔴
 */
export class UTablecell {
  constructor() {
    /**
     * should checkbox be rendered
     */
    this.checkbox = false;
  }
  render() {
    return (h("td", null,
      this.checkbox && h("u-checkbox", { size: "small" }),
      " ",
      this.data));
  }
  static get is() { return "u-tablecell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tablecell.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tablecell.css"]
  }; }
  static get properties() { return {
    "checkbox": {
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
        "text": "should checkbox be rendered"
      },
      "attribute": "checkbox",
      "reflect": false,
      "defaultValue": "false"
    },
    "data": {
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
      "attribute": "data",
      "reflect": false
    }
  }; }
}
