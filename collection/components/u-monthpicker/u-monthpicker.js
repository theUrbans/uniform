import { Component, Host, h } from '@stencil/core';
/**
 * @name Month Picker
 */
export class UMonthpicker {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-monthpicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-monthpicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-monthpicker.css"]
  }; }
}
