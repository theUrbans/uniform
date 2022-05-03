import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uNavbarCss = ":host{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity));width:100%}.top{padding:1rem;position:absolute;top:0px;width:100%}.bottom{padding:1rem;position:absolute;bottom:0px;width:100%}.fixed{position:fixed}";

let UNavbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     *  position of the navbar
     */
    this.position = 'top';
    /**
     * should the navbar be fixed to the top or bottom of the screen -
     * layout should be position relative
     */
    this.fixed = true;
  }
  render() {
    return (h(Host, { role: "navigation", class: {
        [this.position]: true,
        fixed: this.fixed
      } }, h("slot", null)));
  }
};
UNavbar.style = uNavbarCss;

export { UNavbar as u_navbar };
