import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uDatepickerCss = ":host{display:block}";

let UDatepicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UDatepicker.style = uDatepickerCss;

export { UDatepicker as u_datepicker };
