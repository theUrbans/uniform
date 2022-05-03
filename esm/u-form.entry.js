import { r as registerInstance, h } from './index-4f6a2e7b.js';

const uFormCss = "form.sc-u-form{border-radius:1rem;--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-style:solid;border-width:2px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;max-width:75rem;padding:1rem;grid-gap:1rem;gap:1rem}";

let UForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("form", { onSubmit: (e) => e.preventDefault() }, h("slot", null)));
  }
};
UForm.style = uFormCss;

export { UForm as u_form };
