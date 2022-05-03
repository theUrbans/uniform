import { r as registerInstance, h } from './index-4f6a2e7b.js';

const uParagraphCss = ":host{display:block}";

let UParagraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.textAlignLast = 'none';
  }
  render() {
    return (h("p", { style: {
        color: this.color,
        backgroundColor: this.backgroundColor,
        hyphens: this.hyphens,
        textAlign: this.textAlign,
        textAlignLast: this.textAlignLast
      } }, h("slot", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum animi amet quas perspiciatis? Dolores, tempore necessitatibus impedit deleniti laudantium facere facilis, sint quo, minus velit sit quibusdam hic. Rem?")));
  }
};
UParagraph.style = uParagraphCss;

export { UParagraph as u_paragraph };
