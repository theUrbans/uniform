import { Component, h, Prop } from '@stencil/core';
/**
 * @name Cardimage
 * @state 🟡
 * @description Component to fill a card with a picture.
 */
export class UCardimage {
  render() {
    return (h("div", null,
      h("img", { src: this.src, style: {
          width: this.width,
          height: this.height
        } })));
  }
  static get is() { return "u-cardimage"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-cardimage.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-cardimage.css"]
  }; }
  static get properties() { return {
    "src": {
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
        "text": "src: path of image source"
      },
      "attribute": "src",
      "reflect": false
    },
    "height": {
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
        "text": "height of picture: string, e.g. '400px'"
      },
      "attribute": "height",
      "reflect": false
    },
    "width": {
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
        "text": "width of picture: string, e.g. '400px'"
      },
      "attribute": "width",
      "reflect": false
    }
  }; }
}
