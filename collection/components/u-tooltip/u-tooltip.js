import { Component, h, Prop, State, Element } from '@stencil/core';
/**
 * @name Tooltip
 * @state 🟢
 * @description This component allows you to display a tooltip.
 * @slot default - element which receives the tooltip
 * @slot content - (optional) content of the tooltip -> alternative to text, content prop must be used
 */
export class UTooltip {
  constructor() {
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
    return (h("div", { class: "wrapper", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onMouseDown: this.handleClick },
      h("div", { role: "tooltip", onMouseDown: (e) => e.stopPropagation(), class: {
          tooltip: true,
          visible: this.visible,
          invisible: !this.visible,
          [this.position]: true,
          [this.alignment]: true
        } }, !this.content ? this.text : h("slot", { name: "content" })),
      h("slot", null)));
  }
  static get is() { return "u-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-tooltip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-tooltip.css"]
  }; }
  static get properties() { return {
    "text": {
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
        "text": "text of the tooltip"
      },
      "attribute": "text",
      "reflect": false
    },
    "axis": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'x' | 'y'",
        "resolved": "\"x\" | \"y\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "position of the tooltip"
      },
      "attribute": "axis",
      "reflect": false,
      "defaultValue": "'y'"
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'start' | 'center' | 'end'",
        "resolved": "\"center\" | \"end\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "arrow alignment"
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'center'"
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'click' | 'hover'",
        "resolved": "\"click\" | \"hover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "choose trigger event"
      },
      "attribute": "trigger",
      "reflect": false,
      "defaultValue": "'hover'"
    },
    "content": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "render custom content instead of text"
      },
      "attribute": "content",
      "reflect": false
    }
  }; }
  static get states() { return {
    "visible": {},
    "position": {}
  }; }
  static get elementRef() { return "el"; }
}
