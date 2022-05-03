import { Component, h, Prop, Event, Host } from '@stencil/core';
/**
 * @name Button
 * @state 🟢
 */
export class UButton {
  constructor() {
    /**
     * color design
     */
    this.design = 'primary';
    /**
     * change design, only show outlines
     */
    this.outline = false;
    /**
     * button size
     */
    this.size = 'medium';
    /**
     * show disabled state
     */
    this.disabled = false;
    /**
     * show only text
     */
    this.flat = false;
    /**
     * set button type
     */
    this.type = 'button';
    /**
     * enable border radius
     */
    this.rounded = 'all';
    this.handleOnClick = () => {
      this.uClick.emit();
    };
  }
  render() {
    return (h(Host, null,
      h("button", { onClick: this.handleOnClick, disabled: this.disabled, type: this.type, class: {
          button: true,
          [this.size]: true,
          [this.design]: true,
          [`fill-${this.design}`]: !this.outline && !this.flat,
          outline: this.outline,
          flat: this.flat,
          disabled: this.disabled,
          [`rounded-${this.rounded}`]: true
        } },
        h("slot", { name: "prefix" }),
        h("slot", null, "Button Text"),
        h("slot", { name: "suffix" }))));
  }
  static get is() { return "u-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-button.css"]
  }; }
  static get properties() { return {
    "design": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'secondary' | 'error' | 'success' | 'warning' | 'primary'",
        "resolved": "\"error\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "color design"
      },
      "attribute": "design",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "outline": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "change design, only show outlines"
      },
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "button size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "show disabled state"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "flat": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "show only text"
      },
      "attribute": "flat",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'submit' | 'reset'",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "set button type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "rounded": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right' | 'top' | 'bottom' | 'none' | 'all'",
        "resolved": "\"all\" | \"bottom\" | \"left\" | \"none\" | \"right\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "enable border radius"
      },
      "attribute": "rounded",
      "reflect": false,
      "defaultValue": "'all'"
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
        "text": "emit wClick on button click"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
