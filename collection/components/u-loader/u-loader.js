import { Component, Host, h } from '@stencil/core';
/**
 * @name Loader
 */
export class ULoader {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-loader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-loader.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-loader.css"]
  }; }
}
