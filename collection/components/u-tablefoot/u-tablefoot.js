import { Component, Host, h } from '@stencil/core';
/**
 * @name Table Foot
 */
export class UTablefoot {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-tablefoot"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tablefoot.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tablefoot.css"]
  }; }
}
