import { Component, Host, h, Prop, Event, State } from '@stencil/core';
/**
 * @name Radio Group
 * @state 🟡
 * @categorie Input Control
 */
export class URadiogroup {
  constructor() {
    this.options = [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' }
    ];
    this.alignment = 'vertical';
    this.label = 'Test';
    this.handleInput = (e, option) => {
      const input = e.target;
      if (input) {
        this.value = input.value;
        this.uInput.emit(option);
      }
    };
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          wrapper: true,
          [this.alignment]: true
        } },
        this.label ? (h("span", { class: { label: true } }, this.label)) : null,
        this.options.map((option) => (h("label", { htmlFor: option.label, class: "container", onMouseEnter: () => (this.hovered = option.label), onMouseLeave: () => (this.hovered = '') },
          option.label,
          h("input", { type: "radio", id: option.label, value: option.value, checked: this.value === option.value, onInput: (e) => this.handleInput(e, option), class: {
              checkbox: true
            } }),
          h("span", { class: {
              checkmark: true,
              hovered: this.hovered === option.label
            } })))))));
  }
  static get is() { return "u-radiogroup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-radiogroup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-radiogroup.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<Option>",
        "resolved": "Option[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "Option": {
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
      "defaultValue": "[\n    { value: 1, label: 'Option 1' },\n    { value: 2, label: 'Option 2' },\n    { value: 3, label: 'Option 3' }\n  ]"
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'vertical' | 'horizontal'",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'vertical'"
    },
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
      "defaultValue": "'Test'"
    }
  }; }
  static get states() { return {
    "hovered": {}
  }; }
  static get events() { return [{
      "method": "uInput",
      "name": "uInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
