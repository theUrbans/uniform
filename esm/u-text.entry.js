import { r as registerInstance, h } from './index-ac0beabc.js';

const uTextCss = ":host{display:block}";

let UText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * font size: string, e.g. '12px', '1rem'. Default is '1rem'.
     */
    this.size = '1rem';
    /**
     * font weight: string, e.g. 'bold'. Default is 'normal'.
     */
    this.weight = 'normal';
    /**
     * font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white).
     */
    this.color = '#fff';
  }
  render() {
    return (h("span", { style: {
        fontSize: this.size,
        fontWeight: this.weight,
        color: this.color,
        textTransform: this.transform
      } }, h("slot", null)));
  }
};
UText.style = uTextCss;

export { UText as u_text };
