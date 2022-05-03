import { Component, Host, h, Prop } from '@stencil/core';
/**
 * @name Navigation Bar
 * @state 🟡
 * @description top or bottom navigation bar
 * @categorie Layout
 */
export class UNavbar {
  constructor() {
    /**
     *  position of the navbar
     */
    this.position = 'top';
    /**
     * should the navbar be fixed to the top or bottom of the screen -
     * layout should be position relative
     */
    this.fixed = true;
  }
  render() {
    return (h(Host, { role: "navigation", class: {
        [this.position]: true,
        fixed: this.fixed
      } },
      h("slot", null)));
  }
  static get is() { return "u-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-navbar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-navbar.css"]
  }; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'bottom'",
        "resolved": "\"bottom\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "position of the navbar"
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'top'"
    },
    "fixed": {
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
        "text": "should the navbar be fixed to the top or bottom of the screen -\nlayout should be position relative"
      },
      "attribute": "fixed",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
}
