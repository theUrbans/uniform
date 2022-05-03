import { Component, Host, h, Listen, State, Method } from '@stencil/core';
/**
 * @name Layout
 * @state 🟡
 * @description layout which decides whether to use mobile or desktop layout
 * @categorie Layout
 * @slot menu - menu view
 * @slot main - main view
 * @slot option - option view
 */
export class ULayout {
  onWindowResize() {
    if (window.innerWidth <= 768)
      this.mode = 'mobile';
    else
      this.mode = 'desktop';
  }
  componentWillLoad() {
    this.onWindowResize();
  }
  async showOption() {
    if (this.mode === 'mobile') {
      this.mobilelayout.activateOption();
      this.mobilelayout.showOption();
    }
    if (this.mode === 'desktop') {
      window.dispatchEvent(new CustomEvent('show-modal', {
        detail: { name: 'uniform-layout-option' }
      }));
    }
  }
  async closeOption() {
    if (this.mode === 'mobile') {
      this.mobilelayout.showMain();
      this.mobilelayout.disableOption();
    }
    if (this.mode === 'desktop') {
      console.log('close option');
      window.dispatchEvent(new CustomEvent('close-modal', {
        detail: { name: 'uniform-layout-option' }
      }));
    }
  }
  render() {
    return (h(Host, null, this.mode === 'mobile' ? (h("u-mobilelayout", { ref: (mobile) => (this.mobilelayout = mobile) },
      h("div", { slot: "menu" },
        h("slot", { name: "menu" })),
      h("div", { slot: "main" },
        h("slot", { name: "main" })),
      h("div", { slot: "option" },
        h("slot", { name: "option" })))) : ([
      h("u-desktoplayout", null,
        h("div", { slot: "menu" },
          h("slot", { name: "menu" })),
        h("div", { slot: "main" },
          h("slot", { name: "main" }))),
      h("u-modal", { name: "uniform-layout-option" },
        h("slot", { name: "option-header", slot: "header" }),
        h("slot", { name: "option-body", slot: "body" }))
    ])));
  }
  static get is() { return "u-layout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-layout.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-layout.css"]
  }; }
  static get states() { return {
    "mode": {}
  }; }
  static get methods() { return {
    "showOption": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "closeOption": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
