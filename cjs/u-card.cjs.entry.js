'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uCardCss = ".card{border-radius:1rem;border-width:1px;overflow:hidden;position:relative}";

let UCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: "card", style: {
        backgroundColor: this.color,
        width: this.width
      } }, index.h("slot", null)));
  }
};
UCard.style = uCardCss;

exports.u_card = UCard;
