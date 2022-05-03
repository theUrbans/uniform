import { Component, h, Prop } from '@stencil/core';
/**
 * @name Menu
 * @state 🟡
 */
export class UMenu {
  constructor() {
    this.axis = 'y';
    this.width = 'fullwidth';
    this.padding = true;
    this.items = [
      {
        label: 'test1',
        icon: (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })))
      },
      {
        label: 'test2',
        icon: (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" })))
      }
    ];
  }
  render() {
    return (h("ul", { class: {
        [this.axis]: true,
        [this.width]: true,
        padding: this.padding
      } }, this.items.map((item, index) => {
      const row = [];
      const attr = null;
      if (item.icon)
        row.push(item.icon);
      if (item.disabled)
        attr.disabled = true;
      if (item.label)
        row.push(h("span", null, item.label));
      return (h("li", Object.assign({ class: {
          item: true,
          start: !this.padding && index === 0,
          middle: !this.padding && index > 0 && index < this.items.length - 1,
          end: !this.padding && index === this.items.length - 1,
          rounded: this.padding
        } }, attr), row));
    })));
  }
  static get is() { return "u-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-menu.css"]
  }; }
  static get properties() { return {
    "axis": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'x' | 'y'",
        "resolved": "\"x\" | \"y\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "axis",
      "reflect": false,
      "defaultValue": "'y'"
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'fullwidth' | 'contentwidth'",
        "resolved": "\"contentwidth\" | \"fullwidth\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'fullwidth'"
    },
    "padding": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "true"
    },
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<MenuItems>",
        "resolved": "MenuItems[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "MenuItems": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[\n    {\n      label: 'test1',\n      icon: (\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          class=\"h-5 w-5\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          stroke=\"currentColor\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            stroke-width=\"2\"\n            d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"\n          />\n        </svg>\n      )\n    },\n    {\n      label: 'test2',\n      icon: (\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          class=\"h-5 w-5\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          stroke=\"currentColor\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            stroke-width=\"2\"\n            d=\"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"\n          />\n        </svg>\n      )\n    }\n  ]"
    }
  }; }
}
