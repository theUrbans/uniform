import { Component, Host, h } from '@stencil/core';
/**
 * @name Table Head
 */
export class UTablehead {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-tablehead"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tablehead.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tablehead.css"]
  }; }
}
