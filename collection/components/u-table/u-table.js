import { Component, h, Prop } from '@stencil/core';
/**
 * @name Table
 */
export class UTable {
  constructor() {
    /**
     * control border-collapse style
     */
    this.borderStyle = 'collapse';
    /**
     * control border-spacing styöe
     */
    this.borderSpacing = '0';
  }
  render() {
    return (h("table", { style: {
        borderCollapse: this.borderStyle,
        borderSpacing: this.borderSpacing
      } }));
  }
  static get is() { return "u-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-table.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-table.css"]
  }; }
  static get properties() { return {
    "borderStyle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'seperate' | 'collapse'",
        "resolved": "\"collapse\" | \"seperate\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "control border-collapse style"
      },
      "attribute": "border-style",
      "reflect": false,
      "defaultValue": "'collapse'"
    },
    "borderSpacing": {
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
        "text": "control border-spacing sty\u00F6e"
      },
      "attribute": "border-spacing",
      "reflect": false,
      "defaultValue": "'0'"
    }
  }; }
}
