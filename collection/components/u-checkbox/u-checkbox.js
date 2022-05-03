import { Component, Event, h, Method, Prop } from '@stencil/core';
/**
 * @name Checkbox
 * @state 🟡
 * @description handle bool user input
 * @categorie Input Control
 */
export class UCheckbox {
  constructor() {
    this.label = '';
    this.checked = false;
    this.size = 'medium';
    this.disabled = false;
    this.tristate = false;
    this.handleInput = (event) => {
      if (this.disabled)
        return;
      const input = event.target;
      if (this.tristate) {
        this.checkbox.indeterminate = true;
      }
      this.checked = input.checked;
      this.uChange.emit(input.checked);
    };
  }
  async set(checked) {
    this.checked = checked;
  }
  render() {
    return (h("label", { class: {
        container: true,
        [`size-${this.size}`]: true,
        disabled: this.disabled
      } },
      h("span", { class: {
          label: true,
          visible: !!this.label,
          hidden: !this.label
        } }, this.label),
      h("input", { type: "checkbox", ref: (cb) => (this.checkbox = cb), checked: this.checked, onInput: this.handleInput, disabled: this.disabled }),
      h("span", { class: {
          checkmark: !this.tristate,
          [`check-${this.size}`]: !this.tristate,
          indeterminate: this.tristate,
          [`indeterminate-${this.size}`]: this.tristate
        } })));
  }
  static get is() { return "u-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-checkbox.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-checkbox.css"]
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "checked": {
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
      "attribute": "checked",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "tristate": {
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
      "attribute": "tristate",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "uChange",
      "name": "uChange",
      "bubbles": false,
      "cancelable": true,
      "composed": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "set": {
      "complexType": {
        "signature": "(checked: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
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
}
