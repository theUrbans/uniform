import { Component, Host, h } from '@stencil/core';
/**
 * @name Card Select
 */
export class UCardselect {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-cardselect"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-cardselect.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-cardselect.css"]
  }; }
}
