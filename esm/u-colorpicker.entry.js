import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uColorpickerCss = ":host{display:block}";

let UColorpicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("input", { type: "color" })));
  }
};
UColorpicker.style = uColorpickerCss;

export { UColorpicker as u_colorpicker };
