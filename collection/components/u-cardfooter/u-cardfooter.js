import { Component, h, Prop } from '@stencil/core';
/**
 * @name Cardfooter
 * @state 🟡
 * @description Component to use as a footer of a card. Comes with function to overlap a picture in the cardbody and has a background-color, which is slighty see through.
 */
export class UCardfooter {
  constructor() {
    /**
     * footer overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (h("div", { class: { overlap: this.overlap } },
      h("slot", null)));
  }
  static get is() { return "u-cardfooter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-cardfooter.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-cardfooter.css"]
  }; }
  static get properties() { return {
    "overlap": {
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
        "text": "footer overlaps the cardbody and will have see through background box"
      },
      "attribute": "overlap",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
