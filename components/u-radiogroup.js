import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uRadiogroupCss = ":host{display:block;margin-top:0.75rem}.label{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;font-size:1rem;line-height:1.5rem;padding-left:0.25rem;padding-right:0.25rem;position:absolute;top:-0.875rem;left:1rem;--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));letter-spacing:0.025em}.dark .label{--tw-bg-opacity:1;background-color:rgba(74, 74, 74, var(--tw-bg-opacity))}.vertical{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;grid-gap:0.75rem;gap:0.75rem}.horizontal{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;grid-gap:0.75rem;gap:0.75rem}.wrapper{border-radius:1rem;--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-style:solid;border-width:2px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;position:relative}.container{cursor:pointer;padding-left:2rem;position:relative;--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{cursor:pointer;height:0px;opacity:0;position:absolute;width:0px}.checkmark{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));border-color:transparent;border-radius:9999px;border-style:solid;border-width:2px;height:1.5rem;position:absolute;top:0px;left:0px;width:1.5rem}.hovered{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(156, 163, 175, var(--tw-border-opacity));border-style:solid;border-width:2px}input:checked~.checkmark{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity))}.checkmark:after{display:none;position:absolute;content:'';--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-radius:9999px;height:0.75rem;top:50%;left:50%;width:0.75rem;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));--tw-translate-x:-50%;--tw-translate-y:-50%}input:checked~.checkmark::after{display:block}";

let URadiogroup$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.uInput = createEvent(this, "uInput", 7);
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
    return (h(Host, null, h("div", { class: {
        wrapper: true,
        [this.alignment]: true
      } }, this.label ? (h("span", { class: { label: true } }, this.label)) : null, this.options.map((option) => (h("label", { htmlFor: option.label, class: "container", onMouseEnter: () => (this.hovered = option.label), onMouseLeave: () => (this.hovered = '') }, option.label, h("input", { type: "radio", id: option.label, value: option.value, checked: this.value === option.value, onInput: (e) => this.handleInput(e, option), class: {
        checkbox: true
      } }), h("span", { class: {
        checkmark: true,
        hovered: this.hovered === option.label
      } })))))));
  }
  static get style() { return uRadiogroupCss; }
};
URadiogroup$1 = /*@__PURE__*/ proxyCustomElement(URadiogroup$1, [1, "u-radiogroup", {
    "options": [16],
    "value": [1032],
    "alignment": [1],
    "label": [1],
    "hovered": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-radiogroup"];
  components.forEach(tagName => { switch (tagName) {
    case "u-radiogroup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, URadiogroup$1);
      }
      break;
  } });
}

const URadiogroup = URadiogroup$1;
const defineCustomElement = defineCustomElement$1;

export { URadiogroup, defineCustomElement };
