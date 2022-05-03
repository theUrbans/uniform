import { Component, Host, h } from '@stencil/core';
export class UContainer {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-container.css"]
  }; }
}
