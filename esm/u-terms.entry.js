import { r as registerInstance, h, H as Host } from './index-ac0beabc.js';

const uTermsCss = ":host{display:block}";

let UTerms = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UTerms.style = uTermsCss;

export { UTerms as u_terms };
