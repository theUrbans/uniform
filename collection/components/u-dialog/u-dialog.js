import { Component, Host, h, Prop, Listen, State } from '@stencil/core';
/**
 * @name Dialog
 * @state 🟡
 * @description pre configured Modal
 * @categorie Modal
 */
export class UDialog {
  constructor() {
    this.name = 'u-dialog-default';
    this.open = false;
    this.title = 'u-dialog title';
    this.content = '';
    this.buttons = [{ title: 'OK' }];
  }
  openDialog(e) {
    const { params } = e.detail;
    // if (name === this.name) this.open = true;
    this.title = params.title || '';
    this.content = params.content || '';
    this.buttons = params.buttons || [{ title: 'OK' }];
    this.modal.showModal(this.name);
  }
  render() {
    return (h(Host, null,
      h("u-modal", { name: this.name, ref: (modal) => (this.modal = modal), resizeable: false, moveable: false, closeOnClick: false },
        h("span", { slot: "header" }, this.title),
        h("div", { slot: "body", class: "body" },
          h("p", null, this.content),
          h("div", { class: "actions" }, this.buttons.map((action) => (h("u-button", { design: action.design || 'secondary', outline: true, onClick: action.handler
              ? action.handler
              : () => this.modal.closeModal(this.name) }, action.title))))))));
  }
  static get is() { return "u-dialog"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "desktop": ["u-dialog.desktop.css"],
    "mobile": ["u-dialog.mobile.css"]
  }; }
  static get styleUrls() { return {
    "desktop": ["u-dialog.desktop.css"],
    "mobile": ["u-dialog.mobile.css"]
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
      "defaultValue": "'u-dialog-default'"
    }
  }; }
  static get states() { return {
    "open": {},
    "title": {},
    "content": {},
    "buttons": {}
  }; }
  static get listeners() { return [{
      "name": "open-dialog",
      "method": "openDialog",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
