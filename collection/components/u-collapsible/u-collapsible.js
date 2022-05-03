import { Component, Host, h, State, Prop, Event, Element, Method } from '@stencil/core';
/**
 * @name Collapsible
 * @state 🟢
 * @description accordion like component
 * @slot default - content inside of the collapsible
 */
export class UCollapsible {
  constructor() {
    /**
     * set the size of the spoiler
     */
    this.size = 'medium';
    this.isOpen = false;
    this.handleOnClick = () => {
      this.isOpen ? this.close() : this.open();
    };
  }
  /**
   * method to close collapsible
   */
  async closeCollapsible() {
    this.close();
  }
  /**
   * method to open collapsible
   */
  async openCollapsible() {
    this.open();
  }
  open() {
    this.isOpen = true;
    const spoiler = this.el.shadowRoot.querySelector('#collapsible');
    const content = spoiler.nextElementSibling;
    content.style.opacity = '1';
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.style.borderStyle = 'solid';
    this.uOpen.emit();
  }
  close() {
    this.isOpen = false;
    const spoiler = this.el.shadowRoot.querySelector('#collapsible');
    const content = spoiler.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.opacity = '0';
      content.style.borderStyle = 'none';
      content.style.maxHeight = null;
    }
    this.uClose.emit();
  }
  render() {
    return (h(Host, null,
      h("div", { id: "collapsible", class: {
          spoiler: true,
          opened: this.isOpen,
          closed: !this.isOpen,
          [this.size]: true
        }, onClick: this.handleOnClick },
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: { chevron: true, turn180: this.isOpen }, fill: "none", viewBox: "0 0 24 24", width: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, height: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, stroke: "currentColor" },
          h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, d: "M19 9l-7 7-7-7" })),
        h("span", null, this.label)),
      h("div", { class: "content", style: { opacity: '0' } },
        h("slot", null))));
  }
  static get is() { return "u-collapsible"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-collapsible.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["u-collapsible.css"]
  }; }
  static get properties() { return {
    "label": {
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
        "text": "label of the spoiler"
      },
      "attribute": "label",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'large'",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "set the size of the spoiler"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    }
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
  static get events() { return [{
      "method": "uOpen",
      "name": "uOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit when the spoiler is opened"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "uClose",
      "name": "uClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emit when the spoiler is closed"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "closeCollapsible": {
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
        "text": "method to close collapsible",
        "tags": []
      }
    },
    "openCollapsible": {
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
        "text": "method to open collapsible",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
