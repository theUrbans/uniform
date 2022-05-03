import { Component, Element, h, Method, Prop } from '@stencil/core';
/**
 * @name Mobile Layout
 * @state 🟡
 * @description Discord-App like layout with 3 swipeable columns
 * @categorie Layout
 */
export class UMobilelayout {
  constructor() {
    this.showOptions = false;
    this.sideWidth = '94%';
  }
  async showMenu() {
    const menu = this.el.shadowRoot.querySelector('.menu');
    if (!menu)
      return;
    menu.scrollIntoView();
  }
  async showMain() {
    const main = this.el.shadowRoot.querySelector('.main');
    if (!main)
      return;
    main.scrollIntoView();
  }
  async showOption() {
    const option = this.el.shadowRoot.querySelector('.option');
    if (!option)
      return;
    option.scrollIntoView();
  }
  async activateOption() {
    this.showOptions = true;
  }
  async disableOption() {
    this.showOptions = false;
  }
  componentDidLoad() {
    this.showMain();
  }
  render() {
    return (h("div", { class: "layout" },
      h("section", { class: "section menu" },
        h("slot", { name: "menu" })),
      h("section", { class: "section main", onClick: () => this.showMain() },
        h("slot", { name: "main" })),
      this.showOptions && (h("section", { class: "section option", style: {
          width: this.sideWidth
        } },
        h("slot", { name: "option" })))));
  }
  static get is() { return "u-mobilelayout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-mobilelayout.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-mobilelayout.css"]
  }; }
  static get properties() { return {
    "showOptions": {
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
      "attribute": "show-options",
      "reflect": false,
      "defaultValue": "false"
    },
    "sideWidth": {
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
      "attribute": "side-width",
      "reflect": false,
      "defaultValue": "'94%'"
    }
  }; }
  static get methods() { return {
    "showMenu": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
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
    "showMain": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
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
    "showOption": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
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
    "activateOption": {
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
    "disableOption": {
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
  static get elementRef() { return "el"; }
}
