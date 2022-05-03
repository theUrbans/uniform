import { Component, h, Prop, Method, Element, Watch, State, Event, Host } from '@stencil/core';
/**
 * @name Select
 * @state 🟡
 * @description handle single or multiple option input
 * @categorie Input Control
 */
export class USelect {
  constructor() {
    this.hovered = false;
    this.focus = false;
    this.options = [
      { value: '1', label: 'One', disabled: true },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three', disabled: true },
      { value: '4', label: 'Four' },
      { value: '5', label: 'Five' },
      { value: '6', label: 'Six' },
      { value: '7', label: 'Seven' }
    ];
    this.searchable = false;
    this.multiple = false;
    this.index = 0;
    /**
     * the value of the input
     */
    this.value = '';
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
    /**
     * possible types: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     */
    this.autoComplete = 'off';
    /**
     * decide if autocorect should be enabled
     */
    this.autoCorrect = 'off';
    /**
     * decide if autocapitalize should be enabled
     */
    this.autoCapitalize = 'off';
    /**
     * decide if spellcheck should be enabled
     */
    this.spellCheck = false;
    this.filteredOptions = this.options;
    this.searchValue = '';
    this.onInput = (e) => {
      const input = e.target;
      if (!input)
        return;
      this.index = 0;
      this.searchValue = input.value;
      if (this.searchValue) {
        this.filteredOptions = this.options.filter((option) => option.label.toLowerCase().includes(this.searchValue.toLowerCase()));
      }
      else {
        this.filteredOptions = this.options;
      }
      // if (input) this.value = input.value || '';
      // this.uInput.emit(e as InputEvent);
    };
    this.onBlur = () => {
      this.doFocus = false;
      this.uBlur.emit();
    };
    this.position = 'bottom';
    this.onClick = () => {
      this.focus = true;
      this.position = 'bottom';
      // const el = this.el.shadowRoot.querySelector('#options') as HTMLElement;
      // console.log(el);
      // if (!el) return;
      // const { y, height } = this.el.getBoundingClientRect();
      // const optionHeight = el.getBoundingClientRect().height;
      // const windowHeight = window.innerHeight;
      // if (windowHeight - y < optionHeight + height + 20) this.position = 'top';
      // else if (windowHeight - y >= optionHeight + height) this.position = 'bottom';
    };
    this.onFocus = () => {
      this.focus = true;
      this.uFocus.emit();
    };
    this.onKeyDown = (e) => {
      // on 'esc' press blur
      if (e.keyCode === 27) {
        this.inputElement.blur();
        this.focus = false;
      }
      // on arrow down
      if (e.keyCode === 40) {
        e.preventDefault();
        this.index < this.filteredOptions.length - 1
          ? (this.index += 1)
          : (this.index = 0);
      }
      // on arrow up
      if (e.keyCode === 38) {
        e.preventDefault();
        this.index > 0
          ? (this.index -= 1)
          : (this.index = this.filteredOptions.length - 1);
      }
      // on enter
      if (e.keyCode === 13) {
        e.preventDefault();
        if (!this.filteredOptions[this.index].disabled) {
          this.selectOption(this.filteredOptions[this.index].value, this.filteredOptions[this.index].label);
        }
      }
    };
    this.resetValue = (e) => {
      if (e && !this.disabled && !this.readonly) {
        e.stopPropagation();
        e.preventDefault();
        this.value = '';
        this.searchValue = '';
        this.filteredOptions = this.options;
        this.inputElement.value = '';
        this.focus = false;
      }
    };
    this.selected = this.options
      .filter((option) => option.selected)
      .map((option) => option.label);
    this.selectOption = (value, label) => {
      if (this.multiple) {
        if (!this.selected.includes(label)) {
          this.selected = [...this.selected, label];
        }
        else {
          this.selected = this.selected.filter((option) => option !== label);
        }
        this.getInputWidth();
        this.uChange.emit(this.options.filter((option) => this.selected.includes(option.label)));
        if (this.options.find((o) => o.label === label).selected) {
          this.options.find((o) => o.label === label).selected = false;
        }
      }
      else {
        this.selected = [label];
        this.focus = false;
        this.uChange.emit(value);
      }
      this.inputElement.focus();
    };
    // calculate the the count of options to show before breakdown and more are shown with eg '2+'
    this.shortenSelected = false;
    this.shortenBreakpoint = 0;
    this.oldSelectedLength = 0;
    this.removeOption = (label) => {
      this.selected = this.selected.filter((option) => option !== label);
      this.inputElement.focus();
      this.getInputWidth();
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
  getInputWidth() {
    const inputWidth = this.inputElement.getBoundingClientRect().width;
    const elementCount = this.selected.length;
    if (inputWidth < 200) {
      this.shortenSelected = true;
      if (this.oldSelectedLength > elementCount) {
        this.oldSelectedLength = elementCount;
        this.shortenBreakpoint = 0;
        this.shortenSelected = false;
      }
      else if (elementCount > this.oldSelectedLength &&
        this.shortenBreakpoint === 0) {
        this.shortenBreakpoint = elementCount - 1;
        this.oldSelectedLength = elementCount;
      }
    }
    else {
      this.shortenSelected = false;
    }
  }
  render() {
    const value = this.getValue();
    return (h(Host, { tabindex: "0", onBlur: () => (this.focus = false) },
      h("div", { onMouseEnter: () => (this.hovered = true), onMouseLeave: () => (this.hovered = false), class: {
          wrapper: true,
          disabled: this.disabled,
          [this.design]: true,
          [this.size]: true,
          [`top-${this.size}`]: this.focus || this.selected.length > 0
        } },
        this.shortenSelected
          ? this.selected.map((option, index) => {
            if (index < this.shortenBreakpoint) {
              return (h("span", { class: "selected-option" },
                option,
                h("span", { class: "selected-rm", onClick: () => this.removeOption(option) }, "\u00D7")));
            }
            if (index === this.selected.length - 1) {
              return (h("span", { class: "selected-option" },
                "+",
                this.selected.slice(this.shortenBreakpoint, -1).length +
                  1));
            }
            return null;
          })
          : this.selected.map((option) => (h("span", { class: "selected-option" },
            option,
            h("span", { class: "selected-rm", onClick: () => this.removeOption(option) }, "\u00D7")))),
        h("input", { class: {
            input: true,
            [`text-${this.size}`]: true
          }, ref: (input) => (this.inputElement = input), min: this.min, max: this.max, type: this.inputType, value: value, onInput: this.onInput, onBlur: this.onBlur, onClick: this.onClick, onFocus: this.onFocus, onKeyDown: this.onKeyDown, pattern: this.pattern, required: this.required, readonly: this.readonly || !this.searchable, disabled: this.disabled, autoComplete: this.autoComplete, autoCapitalize: this.autoCapitalize, autoCorrect: this.autoCorrect, spellcheck: this.spellCheck, autoFocus: false, placeholder: " " }),
        !!this.label || this.selected.length ? (h("label", { class: {
            label: true,
            [this.design]: true,
            [`label-${this.size}`]: true
          } }, this.required ? `${this.label} *` : this.label)) : null,
        h("div", { onClick: this.resetValue, onTouchStart: this.resetValue, class: {
            reset: true
          } },
          this.value || this.searchValue ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, height: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
            h("path", { d: "M15 15L9 9m6 0l-6 6", class: this.focus || this.hovered
                ? 'text-red-500'
                : 'text-gray-500' }),
            h("circle", { cx: "12", cy: "12", r: "10", class: this.focus || this.hovered
                ? 'text-red-500'
                : 'text-gray-500' }))) : null,
          h("svg", { xmlns: "http://www.w3.org/2000/svg", class: { chevron: true, turn180: this.focus }, fill: "none", viewBox: "0 0 24 24", width: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, height: this.size === 'small' ? 16 : this.size === 'medium' ? 20 : 24, stroke: "currentColor" },
            h("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": this.size === 'small' ? 1 : this.size === 'medium' ? 1.5 : 2, d: "M19 9l-7 7-7-7" }))),
        this.focus ? (h("div", { class: {
            options: true,
            optionsTop: this.position === 'top',
            optionsBottom: this.position === 'bottom'
          }, id: "options" }, this.filteredOptions.map(({ value, label, disabled, selected }) => (h("span", { class: {
            option: true,
            [`option-${this.design}`]: true,
            selected: this.selected.includes(label),
            hovered: this.filteredOptions[this.index].label === label,
            disabled
          }, role: "option", onClick: () => {
            if (!disabled) {
              this.selectOption(value, label);
            }
          }, onMouseEnter: () => (this.index = this.filteredOptions.findIndex((option) => option.label === label)) }, this.multiple ? (h("u-checkbox", { 
          // onUChange={() => {
          //   if (!disabled) this.selectOption(value, label);
          // }}
          label: label, size: this.size, checked: this.selected.includes(label) || selected, disabled: disabled })) : (label)))))) : null)));
  }
  static get is() { return "u-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-select.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-select.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Option[]",
        "resolved": "Option[]",
        "references": {
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
      "defaultValue": "[\n    { value: '1', label: 'One', disabled: true },\n    { value: '2', label: 'Two' },\n    { value: '3', label: 'Three', disabled: true },\n    { value: '4', label: 'Four' },\n    { value: '5', label: 'Five' },\n    { value: '6', label: 'Six' },\n    { value: '7', label: 'Seven' }\n  ]"
    },
    "searchable": {
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
      "attribute": "searchable",
      "reflect": false,
      "defaultValue": "false"
    },
    "multiple": {
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
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
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
        "text": "select design"
      },
      "attribute": "design",
      "reflect": false,
      "defaultValue": "'secondary'"
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
      "reflect": false,
      "defaultValue": "'off'"
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
      "reflect": false,
      "defaultValue": "'off'"
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
      "reflect": false,
      "defaultValue": "'off'"
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
      "reflect": false,
      "defaultValue": "false"
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
    "focus": {},
    "index": {},
    "filteredOptions": {},
    "searchValue": {},
    "position": {},
    "selected": {},
    "shortenSelected": {},
    "shortenBreakpoint": {}
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
        "original": "any",
        "resolved": "any",
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
        "original": "any",
        "resolved": "any",
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
        "original": "any",
        "resolved": "any",
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
        "original": "any",
        "resolved": "any",
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
