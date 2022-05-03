import { Component, h, Prop, Method, Element, Watch, State, Event, Host } from '@stencil/core';
// import close from '../../assets/close.svg';
// import { inputEvent } from '../../utils/utils';
/**
 * @name Input
 * @state 🟡
 * @description handle user text input
 * @categorie Input Control
 */
export class UInput {
  constructor() {
    this.hovered = false;
    this.focus = false;
    /**
     * the value of the input
     */
    this.value = '';
    /**
     * text of label
     * The label replace the placeholder
     */
    this.label = 'Label';
    /**
     * size of the input
     */
    this.size = 'medium';
    /**
     * type of the input
     */
    this.inputType = 'text';
    /**
     * use function returning a boolean to validate the input -> if false, it displays error-msg
     */
    this.validate = true;
    /**
     * select design
     * possible values:
     * - 'default', 'error', 'success', 'warning'
     */
    this.design = 'secondary';
    /**
     * show error message below the input
     */
    this.errorMsg = '';
    /**
     * change this prop to true to focus the input
     */
    this.doFocus = false;
    /**
     * decide if input should have border radius
     */
    this.borderStyle = 'none';
    /**
     * decide if input is required (for forms)
     */
    this.required = false;
    /**
     * decide if the input is disabled
     */
    this.disabled = false;
    /**
     * decide if the input is readonly
     */
    this.readonly = false;
    this.onInput = (e) => {
      const input = e.target;
      if (input) {
        if (this.inputType === 'numeric') {
          // allow only numbers
          input.value = input.value.replace(/[^0-9]/g, '');
          this.value = input.value || '';
        }
        else if (this.inputType === 'decimal') {
          // allow only numbers with comma and dot
          input.value = input.value.replace(/[^0-9.,]/g, '');
          this.value = input.value || '';
        }
        else if (this.inputType === 'email') {
          // email pattern
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(input.value).toLowerCase()))
            this.value = input.value;
        }
        else {
          this.value = input.value;
        }
        this.uInput.emit(this.value);
        this.uInput.emit(this.value);
      }
    };
    this.onBlur = () => {
      this.focus = false;
      this.doFocus = false;
      this.uBlur.emit();
    };
    this.onClick = () => {
      this.focus = true;
    };
    this.onFocus = () => {
      this.focus = true;
      this.uFocus.emit();
    };
    this.onKeyDown = (e) => {
      // on 'esc' press blur
      if (e.keyCode === 27) {
        this.inputElement.blur();
      }
    };
    this.resetValue = (e) => {
      if (e && !this.disabled && !this.readonly) {
        e.stopPropagation();
        e.preventDefault();
        this.setFocus();
        this.value = '';
        this.inputElement.value = '';
      }
    };
  }
  valueChanged() {
    this.uChange.emit(this.value);
  }
  doFocusChanged() {
    if (this.doFocus) {
      this.inputElement.focus();
    }
  }
  disabledChanged() {
    if (this.disabled) {
      this.inputElement.setAttribute('disabled', 'true');
    }
    else {
      this.inputElement.removeAttribute('disabled');
    }
  }
  /**
   * set focus on native input
   */
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }
  /**
   * set blur on native input
   */
  async setBlur() {
    if (this.inputElement) {
      this.inputElement.blur();
    }
  }
  getValue() {
    return this.value.toString();
  }
  setAttr() {
    if (!this.inputElement)
      return;
    if (this.min)
      this.inputElement.setAttribute('min', this.min);
    if (this.max)
      this.inputElement.setAttribute('max', this.max);
    if (this.step)
      this.inputElement.setAttribute('step', this.step);
    if (this.autoComplete)
      this.inputElement.setAttribute('autocomplete', this.autoComplete);
    if (this.autoCorrect)
      this.inputElement.setAttribute('autocorrect', this.autoCorrect);
    if (this.autoCapitalize)
      this.inputElement.setAttribute('autocapitalize', this.autoCapitalize);
    if (this.pattern)
      this.inputElement.setAttribute('pattern', this.pattern);
    if (this.spellCheck)
      this.inputElement.setAttribute('spellcheck', this.spellCheck.toString());
    if (this.required)
      this.inputElement.setAttribute('required', this.required.toString());
    if (this.disabled)
      this.inputElement.setAttribute('disabled', this.disabled.toString());
    if (this.readonly)
      this.inputElement.setAttribute('readonly', this.readonly.toString());
    // autoFocus={false}
  }
  componentDidLoad() {
    this.setAttr();
  }
  render() {
    const value = this.getValue();
    return (h(Host, null,
      this.showSlot === 'left' && h("slot", null),
      this.showSlot === 'both' && h("slot", { name: "left" }),
      h("div", { onMouseEnter: () => (this.hovered = true), onMouseLeave: () => (this.hovered = false), onClick: () => this.inputElement.focus(), class: {
          wrapper: true,
          disabled: this.disabled,
          [this.design]: true,
          [this.size]: true,
          errorText: !this.validate && !this.errorMsg,
          [`slot-${this.showSlot}`]: !!this.showSlot
        } },
        h("input", { type: this.inputType, class: {
            input: true,
            [`text-${this.size}`]: true
            // [`padding-${this.size}`]: this.hovered || this.focus || !!this.value,
          }, ref: (input) => (this.inputElement = input), value: value, onInput: this.onInput, onBlur: this.onBlur, onClick: this.onClick, onFocus: this.onFocus, onKeyDown: this.onKeyDown, placeholder: this.label }),
        this.label ? (h("label", { class: {
            label: true,
            [this.design]: true,
            [`label-${this.size}`]: true
          } }, this.required ? `${this.label} *` : this.label)) : null,
        !this.readonly && !this.disabled && this.value && (h("div", { onClick: this.resetValue, onTouchStart: this.resetValue, class: {
            reset: true
          } }, (this.focus || this.hovered || this.value) && (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.size === 'small'
            ? 16
            : this.size === 'medium'
              ? 20
              : 24, height: this.size === 'small'
            ? 16
            : this.size === 'medium'
              ? 20
              : 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
          h("path", { d: "M15 15L9 9m6 0l-6 6", class: this.focus || this.hovered
              ? 'text-red-500'
              : 'text-gray-500' }),
          h("circle", { cx: "12", cy: "12", r: "10", class: this.focus || this.hovered
              ? 'text-red-500'
              : 'text-gray-500' }))))),
        !this.validate ? (h("span", { class: { 'help-text': true } }, this.errorMsg)) : null),
      this.showSlot === 'right' && h("slot", null),
      this.showSlot === 'both' && h("slot", { name: "right" })));
  }
  static get is() { return "u-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-input.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "string | number | null",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "the value of the input"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "text of label\nThe label replace the placeholder"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'Label'"
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
        "text": "size of the input"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "inputType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'none'\n    | 'text'\n    | 'tel'\n    | 'url'\n    | 'email'\n    | 'numeric'\n    | 'decimal'\n    | 'search'",
        "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "type of the input"
      },
      "attribute": "input-type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "min": {
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
        "text": "if input type === numeric -> min value"
      },
      "attribute": "min",
      "reflect": false
    },
    "max": {
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
        "text": "if input type === numeric -> max value"
      },
      "attribute": "max",
      "reflect": false
    },
    "step": {
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
        "text": "if input type === numeric -> step value"
      },
      "attribute": "step",
      "reflect": false
    },
    "validate": {
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
        "text": "use function returning a boolean to validate the input -> if false, it displays error-msg"
      },
      "attribute": "validate",
      "reflect": false,
      "defaultValue": "true"
    },
    "design": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'error' | 'success' | 'warning' | 'secondary'",
        "resolved": "\"error\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "select design\npossible values:\n- 'default', 'error', 'success', 'warning'"
      },
      "attribute": "design",
      "reflect": false,
      "defaultValue": "'secondary'"
    },
    "showSlot": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right' | 'both'",
        "resolved": "\"both\" | \"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if (and which site) a slot should be rendered"
      },
      "attribute": "show-slot",
      "reflect": false
    },
    "errorMsg": {
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
        "text": "show error message below the input"
      },
      "attribute": "error-msg",
      "reflect": false,
      "defaultValue": "''"
    },
    "doFocus": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "change this prop to true to focus the input"
      },
      "attribute": "do-focus",
      "reflect": false,
      "defaultValue": "false"
    },
    "borderStyle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'none' | 'small' | 'large' | 'round'",
        "resolved": "\"large\" | \"none\" | \"round\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if input should have border radius"
      },
      "attribute": "border-style",
      "reflect": false,
      "defaultValue": "'none'"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if input is required (for forms)"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if the input is disabled"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if the input is readonly"
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    },
    "autoComplete": {
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
        "text": "possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
      },
      "attribute": "auto-complete",
      "reflect": false
    },
    "autoCorrect": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'off' | 'on'",
        "resolved": "\"off\" | \"on\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if autocorect should be enabled"
      },
      "attribute": "auto-correct",
      "reflect": false
    },
    "autoCapitalize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'off'\n    | 'none'\n    | 'on'\n    | 'sentences'\n    | 'words'\n    | 'characters'",
        "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if autocapitalize should be enabled"
      },
      "attribute": "auto-capitalize",
      "reflect": false
    },
    "spellCheck": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "decide if spellcheck should be enabled"
      },
      "attribute": "spell-check",
      "reflect": false
    },
    "pattern": {
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
        "text": "set the pattern for the input"
      },
      "attribute": "pattern",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hovered": {},
    "focus": {}
  }; }
  static get events() { return [{
      "method": "uInput",
      "name": "uInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on input"
      },
      "complexType": {
        "original": "number | string",
        "resolved": "number | string",
        "references": {}
      }
    }, {
      "method": "uChange",
      "name": "uChange",
      "bubbles": false,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on change"
      },
      "complexType": {
        "original": "number | string",
        "resolved": "number | string",
        "references": {}
      }
    }, {
      "method": "uFocus",
      "name": "uFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on focus"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "uBlur",
      "name": "uBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on blur"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
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
        "text": "set focus on native input",
        "tags": []
      }
    },
    "setBlur": {
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
        "text": "set blur on native input",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChanged"
    }, {
      "propName": "doFocus",
      "methodName": "doFocusChanged"
    }, {
      "propName": "disabled",
      "methodName": "disabledChanged"
    }]; }
}
