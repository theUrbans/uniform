import { Component, h, Prop } from '@stencil/core';
/**
 * @name List
 */
export class UList {
  constructor() {
    /**
     * list as row(x) or as column(y)
     */
    this.alignment = 'y';
  }
  render() {
    return (h("ul", { class: { [this.alignment]: true } },
      h("slot", null)));
  }
  static get is() { return "u-list"; }
  static get originalStyleUrls() { return {
    "$": ["u-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-list.css"]
  }; }
  static get properties() { return {
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'x' | 'y'",
        "resolved": "\"x\" | \"y\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "list as row(x) or as column(y)"
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'y'"
    }
  }; }
}
