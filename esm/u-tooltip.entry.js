import { r as registerInstance, h, g as getElement } from './index-ac0beabc.js';

const uTooltipCss = ".bottom.start{top:120%;left:0}.wrapper{display:inline-block;position:relative}.tooltip{--tw-bg-opacity:1;background-color:rgba(17, 24, 39, var(--tw-bg-opacity));border-radius:0.5rem;font-weight:500;font-size:0.875rem;line-height:1.25rem;opacity:0;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;position:absolute;--tw-shadow:0 1px 2px 0 rgb(0 0 0/0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);text-align:center;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));z-index:10;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.dark .tooltip{--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity))}.invisible{visibility:hidden}.visible{opacity:1;visibility:visible;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-o-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:300ms;-o-transition-duration:300ms;transition-duration:300ms}.right{top:50%;left:105%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.right.start:before{content:'';display:block;width:0;height:0;position:absolute;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid black;left:-6px;top:20px}.right.end:before{content:'';display:block;width:0;height:0;position:absolute;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid black;left:-6px;bottom:20px}.right.center:before{content:'';display:block;width:0;height:0;position:absolute;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid black;left:-6px;bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.left{top:50%;right:105%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.left.start:before{content:'';display:block;width:0;height:0;position:absolute;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid black;right:-6px;bottom:20px}.left.end:before{content:'';display:block;width:0;height:0;position:absolute;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid black;right:-6px;top:20px}.left.center:before{content:'';display:block;width:0;height:0;position:absolute;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid black;right:-6px;bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.bottom.start:before{content:'';display:block;width:0;height:0;position:absolute;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid black;top:-6px;left:20px}.bottom.end{top:120%;right:0}.bottom.end:before{content:'';display:block;width:0;height:0;position:absolute;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid black;top:-6px;right:20px}.bottom.center{top:120%;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.bottom.center:before{content:'';display:block;width:0;height:0;position:absolute;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid black;top:-6px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.top.start{bottom:120%;left:0}.top.start:before{content:'';display:block;width:0;height:0;position:absolute;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid black;bottom:-6px;left:10px}.top.end{bottom:120%;right:0}.top.end:before{content:'';display:block;width:0;height:0;position:absolute;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid black;bottom:-6px;right:20px}.top.center{bottom:120%;right:50%;-webkit-transform:translate(50%);transform:translate(50%)}.top.center:before{content:'';display:block;width:0;height:0;position:absolute;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid black;bottom:-6px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}";

let UTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * position of the tooltip
     */
    this.axis = 'y';
    /**
     * arrow alignment
     */
    this.alignment = 'center';
    /**
     * choose trigger event
     */
    this.trigger = 'hover';
    this.visible = false;
    this.position = 'top';
    this.handleMouseEnter = () => {
      if (this.trigger === 'click')
        return;
      this.calcPos();
      console.log('test');
      this.visible = true;
    };
    this.handleMouseLeave = () => {
      if (this.trigger === 'click')
        return;
      this.visible = false;
    };
    this.handleClick = () => {
      if (this.trigger === 'hover')
        return;
      this.calcPos();
      this.visible = !this.visible;
    };
  }
  calcPos() {
    const { x, y } = this.el.getBoundingClientRect();
    if (y > 200 && this.axis === 'y')
      this.position = 'top';
    else if (y < 200 && this.axis === 'y')
      this.position = 'bottom';
    else if (x > 200 && this.axis === 'x')
      this.position = 'left';
    else if (x < 200 && this.axis === 'x')
      this.position = 'right';
  }
  componentWillLoad() {
    this.calcPos();
  }
  render() {
    return (h("div", { class: "wrapper", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onMouseDown: this.handleClick }, h("div", { role: "tooltip", onMouseDown: (e) => e.stopPropagation(), class: {
        tooltip: true,
        visible: this.visible,
        invisible: !this.visible,
        [this.position]: true,
        [this.alignment]: true
      } }, !this.content ? this.text : h("slot", { name: "content" })), h("slot", null)));
  }
  get el() { return getElement(this); }
};
UTooltip.style = uTooltipCss;

export { UTooltip as u_tooltip };
