import { Component, h, Prop, State, Element } from '@stencil/core';
/**
 * @name Popup
 */
export class UPopup {
  constructor() {
    this.axis = 'y-center';
    this.visible = false;
    // @Watch('visible') visibleChanged() {}
    this.position = 'top';
    this.alignment = 'start';
  }
  calcPos() {
    const { x, y } = this.el.getBoundingClientRect();
    if (y > 200 && this.axis.includes('y'))
      this.position = 'top';
    else if (y < 200 && this.axis.includes('y'))
      this.position = 'bottom';
    else if (x > 200 && this.axis.includes('x'))
      this.position = 'left';
    else if (x < 200 && this.axis.includes('x'))
      this.position = 'right';
    if (this.axis.includes('start'))
      this.alignment = 'start';
    else if (this.axis.includes('end'))
      this.alignment = 'end';
    else
      this.alignment = 'center';
  }
  componentWillLoad() {
    this.calcPos();
    console.log(this.alignment);
  }
  render() {
    return (h("div", { class: {
        wrapper: true,
        popup: true,
        [this.position]: true,
        [this.alignment]: true
      }, tabindex: "0", onBlur: () => (this.visible = false), onMouseEnter: () => this.calcPos() },
      h("slot", null)));
  }
  static get is() { return "u-popup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-popup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-popup.css"]
  }; }
  static get properties() { return {
    "axis": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'x-start'\n    | 'x-end'\n    | 'x-center'\n    | 'y-start'\n    | 'y-end'\n    | 'y-center'",
        "resolved": "\"x-center\" | \"x-end\" | \"x-start\" | \"y-center\" | \"y-end\" | \"y-start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "axis",
      "reflect": false,
      "defaultValue": "'y-center'"
    },
    "visible": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "visible",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "position": {},
    "alignment": {}
  }; }
  static get elementRef() { return "el"; }
}
