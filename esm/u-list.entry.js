import { r as registerInstance, h } from './index-ac0beabc.js';

const uListCss = ".x{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.y{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}";

let UList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * list as row(x) or as column(y)
     */
    this.alignment = 'y';
  }
  render() {
    return (h("ul", { class: { [this.alignment]: true } }, h("slot", null)));
  }
};
UList.style = uListCss;

export { UList as u_list };
