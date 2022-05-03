import { Component, Prop, h } from '@stencil/core';
/**
 * @name Cardheader
 * @state 🟡
 * @description Component to use as a header of a card. Comes with function to overlap a picture in the cardbody.
 */
export class UCardheader {
  constructor() {
    /**
     * header overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (h("div", { class: {
        overlap: this.overlap
      } },
      h("slot", null)));
  }
  static get is() { return "u-cardheader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-cardheader.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-cardheader.css"]
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
        "text": "header overlaps the cardbody and will have see through background box"
      },
      "attribute": "overlap",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
