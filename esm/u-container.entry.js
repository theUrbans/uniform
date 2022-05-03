import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uContainerCss = ":host{display:block}";

let UContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
UContainer.style = uContainerCss;

export { UContainer as u_container };
