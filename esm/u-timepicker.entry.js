import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uTimepickerCss = ":host{display:block}";

let UTimepicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UTimepicker.style = uTimepickerCss;

export { UTimepicker as u_timepicker };
