import { Component, h, Prop, Element } from '@stencil/core';
/**
 * @name Icon Wrapper
 * @state 🟡
 * @description Wrapper for icons (svg preferred)
 * @slot default - eg. svg or img
 */
export class UIcon {
  constructor() {
    /**
     * border style of the icon wrapper
     */
    this.borderRadius = 'rounded';
    /**
     * if true hide the border and background color of the wrapper
     */
    this.flat = false;
    /**
     * if true hide the background color of the wrapper
     */
    this.outline = false;
    /**
     * select the design of the icon wrapper
     */
    this.design = 'primary';
    /**
     * if true, svg color matches color with design
     */
    this.udpateSvgColor = true;
  }
  componentDidRender() {
    if (!this.udpateSvgColor)
      return;
    const icon = this.el.querySelector('svg');
    const iconWrapper = this.el.querySelector('i');
    const { color } = getComputedStyle(iconWrapper);
    if (!icon)
      return;
    icon.style.fill = color;
  }
  render() {
    return (h("i", { class: {
        [this.design]: true,
        [`fill-${this.design}`]: !this.outline && !this.flat,
        outline: this.outline,
        flat: this.flat,
        [this.borderRadius]: true
      } },
      h("slot", null)));
  }
  static get is() { return "u-icon"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["u-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["u-icon.css"]
  }; }
  static get properties() { return {
    "borderRadius": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'rounded' | 'square' | 'circle'",
        "resolved": "\"circle\" | \"rounded\" | \"square\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "border style of the icon wrapper"
      },
      "attribute": "border-radius",
      "reflect": false,
      "defaultValue": "'rounded'"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "if true hide the border and background color of the wrapper"
      },
      "attribute": "flat",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "if true hide the background color of the wrapper"
      },
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
    },
    "design": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'error' | 'success' | 'warning' | 'primary' | 'secondary'",
        "resolved": "\"error\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "select the design of the icon wrapper"
      },
      "attribute": "design",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "udpateSvgColor": {
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
        "text": "if true, svg color matches color with design"
      },
      "attribute": "udpate-svg-color",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get elementRef() { return "el"; }
}
