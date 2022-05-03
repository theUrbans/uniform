import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uWeekpickerCss = ":host{display:block}";

let UWeekpicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UWeekpicker.style = uWeekpickerCss;

export { UWeekpicker as u_weekpicker };
