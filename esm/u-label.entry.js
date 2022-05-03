import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uLabelCss = ":host{display:block}";

let ULabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ULabel.style = uLabelCss;

export { ULabel as u_label };
