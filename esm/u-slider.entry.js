import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uSliderCss = ":host{display:block}";

let USlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
USlider.style = uSliderCss;

export { USlider as u_slider };
