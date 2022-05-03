import { Component, Host, h, Prop, State, Element, Listen } from '@stencil/core';
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
/**
 * @name Column
 * @state 🟢
 * @description Flexbox column
 * @categorie Layout
 */
export class UCol {
  constructor() {
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
      style: Object.assign(Object.assign({ width: this.width }, this.setStyle()), { gridColumn: `span ${this.colSize} / span ${this.colSize}` }) },
      this.colSize,
      h("slot", null)));
  }
  static get is() { return "u-col"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-col.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["u-col.css"]
  }; }
  static get properties() { return {
    "align": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'start'\n    | 'center'\n    | 'end'\n    | 'space-around'\n    | 'space-between'\n    | 'space-evenly'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex align-items: start | center | end | space-between | space-around | space-evenly"
      },
      "attribute": "align",
      "reflect": false,
      "defaultValue": "'start'"
    },
    "justify": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'center' | 'end' | 'stretch'",
        "resolved": "\"center\" | \"end\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex justify-content: flex-start | flex-end | center | baseline | stretch"
      },
      "attribute": "justify",
      "reflect": false,
      "defaultValue": "'center'"
    },
    "wrap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'nowrap' | 'wrap' | 'wrap-reverse'",
        "resolved": "\"nowrap\" | \"wrap\" | \"wrap-reverse\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex wrap: nowrap | wrap | wrap-reverse"
      },
      "attribute": "wrap",
      "reflect": false,
      "defaultValue": "'wrap'"
    },
    "gap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "flex gap: string, e.g. '1rem', '1px'"
      },
      "attribute": "gap",
      "reflect": false,
      "defaultValue": "'1em'"
    },
    "padding": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "padding bottom and top: string, e.g. '1rem', '1px'"
      },
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "size": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "used with w-grid, set size based on number of columns on w-grid (default is 12)"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "12"
    },
    "area": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "use with w-grid to set area"
      },
      "attribute": "area",
      "reflect": false,
      "defaultValue": "''"
    },
    "sm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "size in small (\u2265768px)"
      },
      "attribute": "sm",
      "reflect": false
    },
    "md": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "size in medium (\u2265992px)"
      },
      "attribute": "md",
      "reflect": false
    },
    "lg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "size in large (\u22651200px)"
      },
      "attribute": "lg",
      "reflect": false
    },
    "xl": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "size in extra large (\u22651200px)"
      },
      "attribute": "xl",
      "reflect": false
    },
    "start": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "start",
      "reflect": false
    },
    "end": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "end",
      "reflect": false
    }
  }; }
  static get states() { return {
    "width": {},
    "bp": {},
    "colSize": {}
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
