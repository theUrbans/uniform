import { Component, Host, h, Prop, State } from '@stencil/core';
/**
 * @name Editor
 */
export class UEditor {
  render() {
    return (h(Host, null,
      h("div", { class: "toolbar" },
        h("w-group", null,
          h("w-button", { outline: true, design: "secondary", rounded: "left" }, "a"),
          h("w-button", { outline: true, design: "secondary", rounded: "none" }, "b"),
          h("w-button", { outline: true, design: "secondary", rounded: "right" }, "c"))),
      h("u-textarea", null)));
  }
  static get is() { return "u-editor"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-editor.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-editor.css"]
  }; }
  static get properties() { return {
    "tools": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "EditorTools",
        "resolved": "EditorTools",
        "references": {
          "EditorTools": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "edits": {}
  }; }
}
