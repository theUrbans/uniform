import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uDatetimepickerCss = ":host{display:block}";

let UDatetimepicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UDatetimepicker.style = uDatetimepickerCss;

export { UDatetimepicker as u_datetimepicker };
