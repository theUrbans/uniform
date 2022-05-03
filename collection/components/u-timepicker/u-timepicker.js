import { Component, Host, h } from '@stencil/core';
/**
 * @name Time picker
 */
export class UTimepicker {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-timepicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-timepicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-timepicker.css"]
  }; }
}
