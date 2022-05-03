import { Component, Host, h } from '@stencil/core';
/**
 * @name Date Time Picker
 * @categorie Input Control
 */
export class UDatetimepicker {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-datetimepicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-datetimepicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-datetimepicker.css"]
  }; }
}
