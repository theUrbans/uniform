import { Component, Host, h } from '@stencil/core';
/**
 * @name Terms
 * @description term popup
 * @categorie Modal
 */
export class UTerms {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "u-terms"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-terms.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-terms.css"]
  }; }
}
