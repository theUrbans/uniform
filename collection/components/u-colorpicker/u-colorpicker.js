import { Component, Host, h } from '@stencil/core';
/**
 * @name Color Picker
 */
export class UColorpicker {
  render() {
    return (h(Host, null,
      h("input", { type: "color" })));
  }
  static get is() { return "u-colorpicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-colorpicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-colorpicker.css"]
  }; }
}
