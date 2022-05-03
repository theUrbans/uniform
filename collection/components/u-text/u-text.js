import { Component, h, Prop } from '@stencil/core';
/**
 * @name Text
 * @state 🟡
 * @description Text component to style fast. No added padding or margin.
 */
export class UText {
  constructor() {
    /**
     * font size: string, e.g. '12px', '1rem'. Default is '1rem'.
     */
    this.size = '1rem';
    /**
     * font weight: string, e.g. 'bold'. Default is 'normal'.
     */
    this.weight = 'normal';
    /**
     * font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white).
     */
    this.color = '#fff';
  }
  render() {
    return (h("span", { style: {
        fontSize: this.size,
        fontWeight: this.weight,
        color: this.color,
        textTransform: this.transform
      } },
      h("slot", null)));
  }
  static get is() { return "u-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-text.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-text.css"]
  }; }
  static get properties() { return {
    "size": {
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
        "text": "font size: string, e.g. '12px', '1rem'. Default is '1rem'."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'1rem'"
    },
    "weight": {
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
        "text": "font weight: string, e.g. 'bold'. Default is 'normal'."
      },
      "attribute": "weight",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "transform": {
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
        "text": "text-transfrom: string, e.g. 'uppercase', 'lowercase'."
      },
      "attribute": "transform",
      "reflect": false
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
        "text": "font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white)."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'#fff'"
    }
  }; }
}
