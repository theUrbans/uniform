import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uMonthpickerCss = ":host{display:block}";

let UMonthpicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UMonthpicker.style = uMonthpickerCss;

export { UMonthpicker as u_monthpicker };
