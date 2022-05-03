import { Component, Host, h } from '@stencil/core';
/**
 * @name Label
 */
export class ULabel {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-label.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-label.css"]
  }; }
}
