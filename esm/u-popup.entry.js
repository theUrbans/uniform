import { r as registerInstance, h, g as getElement } from './index-4f6a2e7b.js';

const uPopupCss = ".wrapper::before{content:'';height:200px;width:200px;background:#000;position:relative;z-index:10}.top{bottom:110%}.bottom{top:110%}.top.start{left:0}.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.end{right:0}.popup{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity));height:3rem;position:absolute;width:12.5rem}";

let UPopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.axis = 'y-center';
    this.visible = false;
    // @Watch('visible') visibleChanged() {}
    this.position = 'top';
    this.alignment = 'start';
  }
  calcPos() {
    const { x, y } = this.el.getBoundingClientRect();
    if (y > 200 && this.axis.includes('y'))
      this.position = 'top';
    else if (y < 200 && this.axis.includes('y'))
      this.position = 'bottom';
    else if (x > 200 && this.axis.includes('x'))
      this.position = 'left';
    else if (x < 200 && this.axis.includes('x'))
      this.position = 'right';
    if (this.axis.includes('start'))
      this.alignment = 'start';
    else if (this.axis.includes('end'))
      this.alignment = 'end';
    else
      this.alignment = 'center';
  }
  componentWillLoad() {
    this.calcPos();
    console.log(this.alignment);
  }
  render() {
    return (h("div", { class: {
        wrapper: true,
        popup: true,
        [this.position]: true,
        [this.alignment]: true
      }, tabindex: "0", onBlur: () => (this.visible = false), onMouseEnter: () => this.calcPos() }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
UPopup.style = uPopupCss;

export { UPopup as u_popup };
