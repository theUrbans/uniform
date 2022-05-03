import { Component, h, Prop } from '@stencil/core';
/**
 * @name Paragraph
 * @state 🟡
 */
export class UParagraph {
  constructor() {
    this.textAlignLast = 'none';
  }
  render() {
    return (h("p", { style: {
        color: this.color,
        backgroundColor: this.backgroundColor,
        hyphens: this.hyphens,
        textAlign: this.textAlign,
        textAlignLast: this.textAlignLast
      } },
      h("slot", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum animi amet quas perspiciatis? Dolores, tempore necessitatibus impedit deleniti laudantium facere facilis, sint quo, minus velit sit quibusdam hic. Rem?")));
  }
  static get is() { return "u-paragraph"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-paragraph.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-paragraph.css"]
  }; }
  static get properties() { return {
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
        "text": ""
      },
      "attribute": "color",
      "reflect": false
    },
    "backgroundColor": {
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
      "attribute": "background-color",
      "reflect": false
    },
    "hyphens": {
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
      "attribute": "hyphens",
      "reflect": false
    },
    "textAlign": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'jusitfy' | 'center' | 'left' | 'right'",
        "resolved": "\"center\" | \"jusitfy\" | \"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text-align",
      "reflect": false
    },
    "textAlignLast": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'jusitfy' | 'center' | 'left' | 'right' | 'none'",
        "resolved": "\"center\" | \"jusitfy\" | \"left\" | \"none\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text-align-last",
      "reflect": false,
      "defaultValue": "'none'"
    }
  }; }
}
