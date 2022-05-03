import { Component, h } from '@stencil/core';
/**
 * @name Table Row
 */
export class UTablerow {
  render() {
    return (h("tr", null,
      h("u-tablecell", null)));
  }
  static get is() { return "u-tablerow"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tablerow.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tablerow.css"]
  }; }
}
