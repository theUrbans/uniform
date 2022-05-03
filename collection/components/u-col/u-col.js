import { Component, Host, h, Prop } from '@stencil/core';
/**
 * @name Column
 * @state 🟢
 * @description Flexbox column
 * @categorie Layout
 */
export class UCol {
  constructor() {
    /**
     * flex align-items: start | center | end | space-between | space-around | space-evenly
     */
    this.align = 'start';
    /**
     * flex justify-content: flex-start | flex-end | center | baseline | stretch
     */
    this.justify = 'center';
    /**
     * flex wrap: nowrap | wrap | wrap-reverse
     */
    this.wrap = 'wrap';
    /**
     * flex gap: string, e.g. '1rem', '1px'
     */
    this.gap = '1em';
    /**
     * padding bottom and top: string, e.g. '1rem', '1px'
     */
    this.padding = '0';
    /**
     * used with w-grid, set size based on number of columns on w-grid (default is 12)
     */
    this.size = 12;
    /**
     * use with w-grid to set area
     */
    this.area = '';
  }
  render() {
    return (h(Host, { class: "col", style: {
        alignItems: this.align,
        justifyContent: this.justify,
        flexWrap: this.wrap,
        gap: this.gap,
        padding: `${this.padding}`,
        gridArea: this.area
      } },
      h("slot", null)));
  }
  static get is() { return "u-col"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-col.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-col.css"]
  }; }
  static get properties() { return {
    "align": {
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
        "text": "flex align-items: start | center | end | space-between | space-around | space-evenly"
      },
      "attribute": "align",
      "reflect": false,
      "defaultValue": "'start'"
    },
    "justify": {
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
        "text": "flex justify-content: flex-start | flex-end | center | baseline | stretch"
      },
      "attribute": "justify",
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
        "text": "flex wrap: nowrap | wrap | wrap-reverse"
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
      "defaultValue": "'1em'"
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
        "text": "padding bottom and top: string, e.g. '1rem', '1px'"
      },
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "size": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "used with w-grid, set size based on number of columns on w-grid (default is 12)"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "12"
    },
    "area": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "use with w-grid to set area"
      },
      "attribute": "area",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
