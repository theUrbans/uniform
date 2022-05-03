'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uCheckboxCss = ".container{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.size-small{height:1rem;font-size:0.875rem;line-height:1.25rem;padding-left:1.25rem}.size-medium{height:1.75rem;font-size:1rem;line-height:1.5rem;padding-left:2rem}.size-large{height:2.25rem;font-size:1.125rem;line-height:1.75rem;padding-left:2.5rem}.container input{height:0px;opacity:0;position:absolute;width:0px}.checkmark{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(148, 163, 184, var(--tw-border-opacity));border-style:solid;position:absolute;left:0px;top:0px}.checkmark:hover{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity))}.container:hover input~.checkmark{--tw-border-opacity:1;border-color:rgba(75, 85, 99, var(--tw-border-opacity))}input:checked~.checkmark{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity))}.checkmark:after{content:'';display:none;position:absolute;border-style:solid;left:50%;--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity));--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-rotate:45deg;--tw-translate-x:-50%}input:checked~.checkmark:after{display:block}.check-small{border-radius:0.375rem;border-width:1px;height:1rem;width:1rem}.check-small::after{border-top-width:0px;border-right-width:2px;border-bottom-width:2px;border-left-width:0px;height:0.5rem;top:10%;width:0.25rem}.check-medium{border-radius:0.5rem;border-width:1.5px;height:1.5rem;width:1.5rem}.check-medium::after{border-top-width:0px;border-right-width:4px;border-bottom-width:4px;border-left-width:0px;height:0.75rem;top:10%;width:0.375rem}.check-large{border-radius:0.75rem;border-width:2px;height:2rem;width:2rem}.check-large::after{border-top-width:0px;border-right-width:5px;border-bottom-width:5px;border-left-width:0px;height:1rem;top:10%;width:0.5rem}.indeterminate{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));border-color:transparent;border-style:solid;position:absolute;left:0px;top:0px}.indeterminate:hover{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity))}.container:hover input~.indeterminate{--tw-border-opacity:1;border-color:rgba(75, 85, 99, var(--tw-border-opacity))}input:checked~.indeterminate{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity))}.indeterminate:after{content:'';display:none;position:absolute;border-style:solid;left:50%;--tw-text-opacity:1;color:rgba(250, 250, 250, var(--tw-text-opacity));--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-rotate:90deg;--tw-translate-x:-50%}input:checked~.indeterminate:after{display:block}.indeterminate-small{border-radius:0.375rem;border-width:1px;height:1rem;width:1rem}.indeterminate-small::after{border-top-width:0px;border-right-width:2px;border-bottom-width:0px;border-left-width:0px;height:0.5rem;top:20%;width:0.25rem}.indeterminate-medium{border-radius:0.5rem;border-width:1.5px;height:1.5rem;width:1.5rem}.indeterminate-medium::after{border-top-width:0px;border-right-width:4px;border-bottom-width:0px;border-left-width:0px;height:0.75rem;top:20%;width:0.375rem}.indeterminate-large{border-radius:0.75rem;border-width:2px;height:2rem;width:2rem}.indeterminate-large::after{border-top-width:0px;border-right-width:5px;border-bottom-width:0px;border-left-width:0px;height:1rem;top:20%;width:0.5rem}.visible{visibility:visible}.hidden{visibility:hidden}.disabled{cursor:not-allowed !important;opacity:0.5 !important}";

let UCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uChange = index.createEvent(this, "uChange", 1);
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
    return (index.h("label", { class: {
        container: true,
        [`size-${this.size}`]: true,
        disabled: this.disabled
      } }, index.h("span", { class: {
        label: true,
        visible: !!this.label,
        hidden: !this.label
      } }, this.label), index.h("input", { type: "checkbox", ref: (cb) => (this.checkbox = cb), checked: this.checked, onInput: this.handleInput, disabled: this.disabled }), index.h("span", { class: {
        checkmark: !this.tristate,
        [`check-${this.size}`]: !this.tristate,
        indeterminate: this.tristate,
        [`indeterminate-${this.size}`]: this.tristate
      } })));
  }
};
UCheckbox.style = uCheckboxCss;

exports.u_checkbox = UCheckbox;
