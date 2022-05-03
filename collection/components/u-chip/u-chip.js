import { Component, Event, h, Prop } from '@stencil/core';
/**
 * @name Chip
 * @state 🟢
 * @description show status of something
 * @slot default - text content
 */
export class UChip {
  constructor() {
    /**
     * color of the chip
     */
    this.design = 'stone';
    /**
     * size of the chip
     */
    this.size = 'medium';
    /**
     * set chip text bold
     */
    this.bold = false;
    /**
     * enable uClick event on chip
     */
    this.clickable = false;
    this.handleClick = () => {
      if (!this.clickable)
        return;
      this.uClick.emit();
    };
  }
  render() {
    return (h("div", { class: {
        chip: true,
        [this.size]: true,
        [this.design]: true,
        left: !this.label,
        click: this.clickable
      }, onClick: this.handleClick },
      this.label && h("div", { class: "label" }, this.label),
      h("span", { class: {
          bold: this.bold
        } },
        h("slot", null, "Chip"))));
  }
  static get is() { return "u-chip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-chip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-chip.css"]
  }; }
  static get properties() { return {
    "design": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ChipDesign",
        "resolved": "\"amber\" | \"cyan\" | \"emerald\" | \"error\" | \"fuchsia\" | \"indigo\" | \"lime\" | \"pink\" | \"primary\" | \"red\" | \"secondary\" | \"slate\" | \"stone\" | \"success\" | \"teal\" | \"warning\"",
        "references": {
          "ChipDesign": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "color of the chip"
      },
      "attribute": "design",
      "reflect": false,
      "defaultValue": "'stone'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'large'",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "size of the chip"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) label of the chip"
      },
      "attribute": "label",
      "reflect": false
    },
    "bold": {
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
        "text": "set chip text bold"
      },
      "attribute": "bold",
      "reflect": false,
      "defaultValue": "false"
    },
    "clickable": {
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
        "text": "enable uClick event on chip"
      },
      "attribute": "clickable",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "uClick",
      "name": "uClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit uClick event on chip click"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
