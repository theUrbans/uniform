import { Component, h } from '@stencil/core';
/**
 * @name Form
 * @state 🟡
 * @description optical wrapper for input fields
 * @categorie Input Control
 */
export class UForm {
  render() {
    return (h("form", { onSubmit: (e) => e.preventDefault() },
      h("slot", null)));
  }
  static get is() { return "u-form"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["u-form.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-form.css"]
  }; }
}
