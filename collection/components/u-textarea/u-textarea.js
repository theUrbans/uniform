import { Component, Host, Element, h, Prop, Watch, Event, State } from '@stencil/core';
/**
 * @name Textarea
 * @state 🟡
 * @categorie Input Control
 */
export class UTextarea {
  constructor() {
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.size = 'medium';
    this.design = 'secondary';
    this.resize = 'vertical';
    this.value = '';
    this.cols = 50;
    this.rows = 6;
    this.focused = false;
    this.resetValue = (e) => {
      if (e && !this.disabled && !this.readonly) {
        e.stopPropagation();
        e.preventDefault();
        this.value = '';
        this.textarea.value = '';
        this.textarea.focus();
        this.focused = true;
      }
    };
    this.handleInput = (e) => {
      const input = e.target;
      if (input) {
        this.value = input.value;
      }
    };
    this.handleFocus = () => {
      this.focused = true;
    };
    this.handleBlur = () => {
      this.focused = false;
    };
  }
  valueChanged() {
    this.textarea.value = this.value;
    this.uInput.emit(this.value);
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          wrapper: true,
          disabled: this.disabled,
          [`design-${this.design}`]: true,
          [`textarea-${this.size}`]: true
        } },
        h("textarea", { ref: (ta) => (this.textarea = ta), required: this.required, readonly: this.readonly, disabled: this.disabled, value: this.value, class: {
            textarea: true,
            [`resize-${this.resize}`]: true
          }, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, rows: this.rows, cols: this.cols }),
        this.label ? (h("label", { class: {
            label: true,
            [`label-${this.size}`]: true,
            [`label-${this.design}`]: true,
            labeltop: !!this.value || this.focused
          } }, this.required ? `${this.label} *` : this.label)) : null,
        !this.readonly && !this.disabled && this.value ? (h("div", { onClick: this.resetValue, onTouchStart: this.resetValue, class: {
            reset: true
          } }, this.focused || this.value ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.size === 'small'
            ? 16
            : this.size === 'medium'
              ? 20
              : 24, height: this.size === 'small'
            ? 16
            : this.size === 'medium'
              ? 20
              : 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
          h("path", { d: "M15 15L9 9m6 0l-6 6", class: this.focused ? 'text-red-500' : 'text-gray-500' }),
          h("circle", { cx: "12", cy: "12", r: "10", class: this.focused ? 'text-red-500' : 'text-gray-500' }))) : null)) : null)));
  }
  static get is() { return "u-textarea"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-textarea.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-textarea.css"]
  }; }
  static get properties() { return {
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
    "readonly": {
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
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "required": {
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
      "attribute": "required",
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
    "design": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'primary'\n    | 'error'\n    | 'success'\n    | 'warning'\n    | 'outline'\n    | 'secondary'",
        "resolved": "\"error\" | \"outline\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "design",
      "reflect": false,
      "defaultValue": "'secondary'"
    },
    "resize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'none' | 'both' | 'horizontal' | 'vertical'",
        "resolved": "\"both\" | \"horizontal\" | \"none\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "resize",
      "reflect": false,
      "defaultValue": "'vertical'"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "cols": {
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
      "attribute": "cols",
      "reflect": false,
      "defaultValue": "50"
    },
    "rows": {
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
      "attribute": "rows",
      "reflect": false,
      "defaultValue": "6"
    }
  }; }
  static get states() { return {
    "focused": {}
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
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}
