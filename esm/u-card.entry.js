import { r as registerInstance, h } from './index-4f6a2e7b.js';

const uCardCss = ".card{border-radius:1rem;border-width:1px;overflow:hidden;position:relative}";

let UCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * width of card: string, e.g. '12px', '20rem'. Default: '24rem'
     */
    this.width = '24rem';
    /**
     * color of card: string, e.g. '#000', 'black'. Default: '#9EBADE' (lightblue)
     */
    this.color = '#9EBADE';
  }
  render() {
    return (h("div", { class: "card", style: {
        backgroundColor: this.color,
        width: this.width
      } }, h("slot", null)));
  }
};
UCard.style = uCardCss;

export { UCard as u_card };
