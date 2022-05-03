import { Component, h, Host, Prop } from '@stencil/core';
/**
 * @name Row
 * @state 🟢
 * @description flexbox row
 * @categorie Layout
 */
export class URow {
  constructor() {
    /**
     * flex justify-content
     */
    this.justify = 'start';
    /**
     * flex align-items
     */
    this.align = 'center';
    /**
     * flex wrap
     */
    this.wrap = 'wrap';
    /**
     * flex gap: string, e.g. '1rem', '1px'
     */
    this.gap = '1rem';
    /**
     * padding left and right: string, e.g. '1rem', '1px'
     */
    this.padding = '0';
    /**
     * flex width behaviour
     */
    this.width = 'full';
  }
  render() {
    return (h(Host, { class: "row", style: {
        alignItems: this.align,
        justifyContent: this.justify,
        flexWrap: this.wrap,
        gap: this.gap,
        padding: `${this.padding}`,
        width: this.width === 'full'
          ? '100%'
          : this.width === 'content'
            ? 'fit-content'
            : 'auto'
      } },
      h("slot", null)));
  }
  static get is() { return "u-row"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["u-row.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-row.css"]
  }; }
  static get properties() { return {
    "justify": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'start'\n    | 'center'\n    | 'end'\n    | 'space-around'\n    | 'space-between'\n    | 'space-evenly'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex justify-content"
      },
      "attribute": "justify",
      "reflect": false,
      "defaultValue": "'start'"
    },
    "align": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'center' | 'end' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex align-items"
      },
      "attribute": "align",
      "reflect": false,
      "defaultValue": "'center'"
    },
    "wrap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'nowrap' | 'wrap' | 'wrap-reverse'",
        "resolved": "\"nowrap\" | \"wrap\" | \"wrap-reverse\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex wrap"
      },
      "attribute": "wrap",
      "reflect": false,
      "defaultValue": "'wrap'"
    },
    "gap": {
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
        "text": "flex gap: string, e.g. '1rem', '1px'"
      },
      "attribute": "gap",
      "reflect": false,
      "defaultValue": "'1rem'"
    },
    "padding": {
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
        "text": "padding left and right: string, e.g. '1rem', '1px'"
      },
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'full' | 'content' | 'auto'",
        "resolved": "\"auto\" | \"content\" | \"full\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex width behaviour"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'full'"
    }
  }; }
}
