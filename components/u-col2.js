import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const uColCss = "";

var Width;
(function (Width) {
  Width["sm"] = "auto";
  Width["md"] = "750px";
  Width["lg"] = "970px";
  Width["xl"] = "1170px";
})(Width || (Width = {}));
var Breakpoint;
(function (Breakpoint) {
  Breakpoint[Breakpoint["sm"] = 576] = "sm";
  Breakpoint[Breakpoint["md"] = 768] = "md";
  Breakpoint[Breakpoint["lg"] = 992] = "lg";
  Breakpoint[Breakpoint["xl"] = 1200] = "xl";
})(Breakpoint || (Breakpoint = {}));
let UCol = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * flex align-items: start | center | end | space-between | space-around | space-evenly
     */
    this.align = 'start';
    /**
     * flex justify-content: flex-start | flex-end | center | baseline | stretch
     */
    this.justify = 'center';
    /**
     * flex wrap: nowrap | wrap | wrap-reverse
     */
    this.wrap = 'wrap';
    /**
     * flex gap: string, e.g. '1rem', '1px'
     */
    this.gap = '1em';
    /**
     * padding bottom and top: string, e.g. '1rem', '1px'
     */
    this.padding = '0';
    /**
     * used with w-grid, set size based on number of columns on w-grid (default is 12)
     */
    this.size = 12;
    /**
     * use with w-grid to set area
     */
    this.area = '';
    this.bp = Breakpoint.sm;
  }
  setStyle() {
    return {
      gridColumnStart: this.start ? this.start.toString() : '',
      gridColumnEnd: this.end ? this.end.toString() : ''
    };
  }
  onWindowResize() {
    const width = window.innerWidth;
    this.setBreakpoint(width);
    this.calculatePosition();
    console.log(Breakpoint[this.bp]);
  }
  setBreakpoint(width) {
    if (width < Breakpoint.md)
      this.bp = Breakpoint.sm;
    else if (width < Breakpoint.lg)
      this.bp = Breakpoint.md;
    else if (width < Breakpoint.xl)
      this.bp = Breakpoint.lg;
    else if (width >= Breakpoint.xl)
      this.bp = Breakpoint.xl;
    // console.log({ width, bp: this.bp });
  }
  calculatePosition() {
    // const gutter = this.el.parentElement.attributes['gutter'];
    // let cols = 12;ack
    // if (gutter) cols = parseInt(gutter.value);
    switch (this.bp) {
      case Breakpoint.sm:
        this.colSize = this.sm;
        break;
      case Breakpoint.md:
        this.colSize = this.md || this.sm;
        break;
      case Breakpoint.lg:
        this.colSize = this.lg || this.md || this.sm;
        break;
      case Breakpoint.xl:
        this.colSize = this.xl || this.lg || this.md || this.sm;
        break;
      default:
        this.colSize = this.size;
        break;
    }
  }
  componentWillRender() {
    this.setBreakpoint(window.innerWidth);
    this.calculatePosition();
  }
  render() {
    return (h(Host
    // class={this.setClasses().join(' ')}
    , {
      // class={this.setClasses().join(' ')}
      style: Object.assign(Object.assign({ width: this.width }, this.setStyle()), { gridColumn: `span ${this.colSize} / span ${this.colSize}` })
    }, this.colSize, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return uColCss; }
};
UCol = /*@__PURE__*/ proxyCustomElement(UCol, [1, "u-col", {
    "align": [1],
    "justify": [1],
    "wrap": [1],
    "gap": [1],
    "padding": [1],
    "size": [2],
    "area": [1],
    "sm": [2],
    "md": [2],
    "lg": [2],
    "xl": [2],
    "start": [2],
    "end": [2],
    "width": [32],
    "bp": [32],
    "colSize": [32]
  }, [[9, "resize", "onWindowResize"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-col"];
  components.forEach(tagName => { switch (tagName) {
    case "u-col":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UCol);
      }
      break;
  } });
}

export { UCol as U, defineCustomElement as d };
