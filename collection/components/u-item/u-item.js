import { Component, Host, h } from '@stencil/core';
/**
 * @name Item
 */
export class UItem {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-item.css"]
  }; }
}
