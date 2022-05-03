import { Component, h, Prop } from '@stencil/core';
/**
 * @name Card
 * @state 🟡
 * @description Classic card component, usable with or without picture. Structured into header, body and footer. In the body can be added a picture.
 */
export class UCard {
  constructor() {
    /**
     * width of card: string, e.g. '12px', '20rem'. Default: '24rem'
     */
    this.width = '24rem';
    /**
     * color of card: string, e.g. '#000', 'black'. Default: '#9EBADE' (lightblue)
     */
    this.color = '#9EBADE';
  }
  render() {
    return (h("div", { class: "card", style: {
        backgroundColor: this.color,
        width: this.width
      } },
      h("slot", null)));
  }
  static get is() { return "u-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-card.css"]
  }; }
  static get properties() { return {
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
        "text": "width of card: string, e.g. '12px', '20rem'. Default: '24rem'"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'24rem'"
    },
    "color": {
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
        "text": "color of card: string, e.g. '#000', 'black'. Default: '#9EBADE' (lightblue)"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'#9EBADE'"
    }
  }; }
}
