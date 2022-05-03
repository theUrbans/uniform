import { Component, Host, h } from '@stencil/core';
/**
 * @name Week Picker
 * @categorie Input Control
 */
export class UWeekpicker {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-weekpicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-weekpicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-weekpicker.css"]
  }; }
}
