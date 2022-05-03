import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uCardselectCss = ":host{display:block}";

let UCardselect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UCardselect.style = uCardselectCss;

export { UCardselect as u_cardselect };
