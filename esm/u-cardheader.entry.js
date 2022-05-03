import { r as registerInstance, h } from './index-4f6a2e7b.js';

const uCardheaderCss = ":host{border-top-left-radius:0.75rem;border-top-right-radius:0.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%}div.overlap{position:absolute;z-index:1}div{margin:0px;padding:0.5rem}";

let UCardheader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * header overlaps the cardbody and will have see through background box
     */
    this.overlap = false;
  }
  render() {
    return (h("div", { class: {
        overlap: this.overlap
      } }, h("slot", null)));
  }
};
UCardheader.style = uCardheaderCss;

export { UCardheader as u_cardheader };
