import { r as registerInstance, h } from './index-4f6a2e7b.js';

const uCardimageCss = "img{display:block}";

let UCardimage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("img", { src: this.src, style: {
        width: this.width,
        height: this.height
      } })));
  }
};
UCardimage.style = uCardimageCss;

export { UCardimage as u_cardimage };
