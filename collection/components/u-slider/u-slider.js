import { Component, Host, h } from '@stencil/core';
/**
 * @name Slider
 * @description input slider
 */
export class USlider {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-slider.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-slider.css"]
  }; }
}
