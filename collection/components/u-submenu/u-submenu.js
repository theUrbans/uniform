import { Component, Event, h, Prop, Watch } from '@stencil/core';
/**
 * @name Sub-Menu
 * @state 🟡
 */
export class USubmenu {
  constructor() {
    this.active = false;
    this.depthLevel = 0;
  }
  onActiveChange() {
    this.uOpenSubMenu.emit({ menu: this.subMenu, open: this.active });
  }
  render() {
    return (h("ul", { class: {
        sub: true,
        submenu: true,
        show: this.active
      } }, this.subMenu.map((item) => (h("u-menuitem", { item: item, active: false, depthLevel: this.depthLevel + 1 })))));
  }
  static get is() { return "u-submenu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["u-submenu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-submenu.css"]
  }; }
  static get properties() { return {
    "subMenu": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<MenuItem>",
        "resolved": "MenuItem[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "MenuItem": {
            "location": "import",
            "path": "../u-menuitem/u-menuitem"
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
      "method": "uOpenSubMenu",
      "name": "uOpenSubMenu",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "{\n    menu: Array<MenuItem>;\n    open: boolean;\n  }",
        "resolved": "{ menu: MenuItem[]; open: boolean; }",
        "references": {
          "Array": {
            "location": "global"
          },
          "MenuItem": {
            "location": "import",
            "path": "../u-menuitem/u-menuitem"
          }
        }
      }
    }]; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "onActiveChange"
    }]; }
}
