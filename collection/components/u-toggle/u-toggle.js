import { Component, Host, h } from '@stencil/core';
/**
 * @name Toggle
 * @categorie Input Control
 */
export class UToggle {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-toggle.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-toggle.css"]
  }; }
}
