import { Component, h, Prop, Event } from '@stencil/core';
/**
 * @name Breadcrumb
 * @state 🟡
 * @description Breadcrumb navigation component
 */
export class UBreadcrumb {
  constructor() {
    this.items = [
      { name: 'test1', link: '/test' },
      { name: 'test2' },
      { name: 'test3' }
    ];
  }
  render() {
    return (h("ul", null, this.items.map((item, index) => {
      const lastElement = index === this.items.length - 1;
      return [
        h("li", null, !lastElement ? (h("u-link", Object.assign({ secondary: true, onClick: () => this.uBreadcrumbClick.emit(item.name) }, (item.link ? { link: item.link } : null)), item.name)) : (h("span", { class: "last" }, item.name))),
        h("span", { class: "separator", style: {
            display: !lastElement ? 'inline-block' : 'none'
          } }, this.seperator ? this.seperator : h("i", null, "\u203A"))
      ];
    })));
  }
  static get is() { return "u-breadcrumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-breadcrumb.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-breadcrumb.css"]
  }; }
  static get properties() { return {
    "items": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<BreadCrumbItem>",
        "resolved": "BreadCrumbItem[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "BreadCrumbItem": {
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
      "defaultValue": "[\n    { name: 'test1', link: '/test' },\n    { name: 'test2' },\n    { name: 'test3' }\n  ]"
    },
    "seperator": {
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
        "text": ""
      },
      "attribute": "seperator",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "uBreadcrumbClick",
      "name": "uBreadcrumbClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
