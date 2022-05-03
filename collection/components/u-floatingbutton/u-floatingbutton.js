import { Component, h, Prop } from '@stencil/core';
/**
 * @name Floating Button
 * @state 🟡
 * @description Button floating at the bottom of the screen
 */
export class UFloatingbutton {
  constructor() {
    this.color = 'lightpink';
    this.position = 'bottom-right';
  }
  render() {
    return (h("button", { class: {
        [this.position]: true
      }, style: {
        backgroundColor: this.color
      } },
      h("slot", null,
        h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" },
          h("path", { fill: "none", d: "M0 0h24v24H0z" }),
          h("path", { d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))));
  }
  static get is() { return "u-floatingbutton"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-floatingbutton.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-floatingbutton.css"]
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
      "reflect": false,
      "defaultValue": "'lightpink'"
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'bottom-left' | 'bottom-right' | 'bottom-center'",
        "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'bottom-right'"
    }
  }; }
}
