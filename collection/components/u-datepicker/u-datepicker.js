import { Component, Host, h } from '@stencil/core';
/**
 * @name Date Picker
 * @categorie Input Control
 */
export class UDatepicker {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-datepicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-datepicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-datepicker.css"]
  }; }
}
