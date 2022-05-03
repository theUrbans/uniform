import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uLoaderCss = ":host{display:block}";

let ULoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ULoader.style = uLoaderCss;

export { ULoader as u_loader };
