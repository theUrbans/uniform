import { Component, h, Prop } from '@stencil/core';
/**
 * @name Group
 * @state 🟡
 * @description This component allows you to display a group of elements.
 */
export class UGroup {
  constructor() {
    /**
     * direction of the group
     */
    this.direction = 'row';
  }
  render() {
    return (h("div", { class: {
        [this.direction]: true
      } },
      h("slot", null)));
  }
  static get is() { return "u-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-group.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-group.css"]
  }; }
  static get properties() { return {
    "direction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'row' | 'column'",
        "resolved": "\"column\" | \"row\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "direction of the group"
      },
      "attribute": "direction",
      "reflect": false,
      "defaultValue": "'row'"
    }
  }; }
}
