import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uTabsCss = ":host{display:block}";

let UTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UTabs.style = uTabsCss;

export { UTabs as u_tabs };
