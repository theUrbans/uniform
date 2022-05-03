import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uItemCss = ":host{display:block}";

let UItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UItem.style = uItemCss;

export { UItem as u_item };
