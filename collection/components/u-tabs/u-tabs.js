import { Component, Host, h } from '@stencil/core';
/**
 * @name Tabs
 */
export class UTabs {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tabs.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tabs.css"]
  }; }
}
