import { Component, Event, h, Prop } from '@stencil/core';
/**
 * @name Menu Item
 */
export class UMenuitem {
  constructor() {
    this.active = false;
    this.depthLevel = 0;
  }
  render() {
    if (this.item.divider)
      return h("hr", null);
    return (h("li", null, this.item.subMenu ? ([
      h("div", { class: "more", onClick: () => {
          this.uItemSelect.emit(this.item);
          if (this.item.subMenu) {
            this.active = !this.active;
            return;
          }
          this.active = false;
        } },
        h("span", null, this.item.name),
        h("span", null, " \u00BB")),
      h("u-submenu", { subMenu: this.item.subMenu.items, active: this.active, depthLevel: this.depthLevel })
    ]) : (h("span", null, this.item.name))));
  }
  static get is() { return "u-menuitem"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["u-menuitem.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-menuitem.css"]
  }; }
  static get properties() { return {
    "item": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "MenuItem",
        "resolved": "MenuItem",
        "references": {
          "MenuItem": {
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
    },
    "active": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    },
    "depthLevel": {
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
        "text": ""
      },
      "attribute": "depth-level",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get events() { return [{
      "method": "uItemSelect",
      "name": "uItemSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MenuItem",
        "resolved": "MenuItem",
        "references": {
          "MenuItem": {
            "location": "local"
          }
        }
      }
    }]; }
}
