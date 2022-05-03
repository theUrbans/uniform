import { Component, Host, h, State, Prop, Listen } from '@stencil/core';
/**
 * @name Alert
 * @state 🟡
 * @categorie Modal
 */
export class UAlert {
  constructor() {
    this.name = 'u-alert-default';
    this.closeText = 'close';
    this.open = false;
    this.title = 'Alert';
    this.content = '';
  }
  openDialog(e) {
    const { params } = e.detail;
    this.title = params.title || '';
    this.content = params.content || '';
    this.modal.showModal(this.name);
  }
  render() {
    return (h(Host, null,
      h("u-modal", { name: this.name, ref: (modal) => (this.modal = modal), resizeable: false, moveable: false, closeOnClick: false },
        h("span", { slot: "header" }, this.title),
        h("div", { slot: "body", class: "body" },
          h("u-paragraph", null, this.content)),
        h("div", { class: "action" },
          h("u-button", { outline: true, design: "error" }, this.closeText)))));
  }
  static get is() { return "u-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-alert.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-alert.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "'u-alert-default'"
    },
    "closeText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "close-text",
      "reflect": false,
      "defaultValue": "'close'"
    }
  }; }
  static get states() { return {
    "open": {},
    "title": {},
    "content": {}
  }; }
  static get listeners() { return [{
      "name": "show-alert",
      "method": "openDialog",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
