import { Component, Element, h, Host, Prop, State } from '@stencil/core';
/**
 * @name Floating Menu
 * @state 🟡
 * @description Menu floating at initial position
 */
export class UFloatingmenu {
  constructor() {
    this.fixed = false;
    this.drag = false;
    this.dragoffset = { x: 0, y: 0 };
    this.onPointerDown = (event) => {
      if (this.fixed || !this.node)
        return;
      event.preventDefault();
      this.drag = true;
      this.dragoffset = {
        x: event.pageX - this.node.offsetLeft,
        y: event.pageY - this.node.offsetTop
      };
    };
    this.onPointerUp = () => {
      this.drag = false;
    };
    this.onPointerMove = (event) => {
      if (!this.drag || !this.node || this.fixed)
        return;
      let newtop = '0px';
      let newleft = '0px';
      if (event.pageX - this.dragoffset.x < 0)
        newleft = '0px';
      else if (event.pageX - this.dragoffset.x + this.node.clientWidth >
        window.innerWidth)
        newleft = `${window.innerWidth - this.node.clientWidth}px`;
      else
        newleft = `${event.pageX - this.dragoffset.x}px`;
      if (event.pageY - this.dragoffset.y < 0)
        newtop = '0px';
      else if (event.pageY - this.dragoffset.y + this.node.clientHeight >
        window.innerHeight)
        newtop = `${window.innerHeight - this.node.clientHeight}px`;
      else
        newtop = `${event.pageY - this.dragoffset.y}px`;
      this.node.style.left = newleft;
      this.node.style.top = newtop;
    };
    this.isOpen = false;
    this.selected = '';
    this.menu = [
      { name: '+ New' },
      { divider: true },
      {
        name: 'Edit',
        subMenu: { items: [{ name: 'Redo' }, { name: 'Undo' }] }
      },
      { name: 'Copy' },
      { divider: true },
      {
        name: 'Open Recent',
        subMenu: {
          items: [
            {
              name: 'HTML',
              subMenu: {
                items: [
                  { name: 'index.html' },
                  { name: 'about.html' },
                  { name: 'impressum.html' }
                ]
              }
            },
            { name: 'Item 2' }
          ]
        }
      }
    ];
  }
  render() {
    return (h(Host, null,
      h("div", { ref: (e) => (this.node = e), class: "button" },
        h("div", { onPointerDown: (e) => this.onPointerDown(e), onPointerUp: () => this.onPointerUp(), onPointerMove: (e) => this.onPointerMove(e), onClick: () => (this.isOpen = !this.isOpen) },
          h("slot", null,
            h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" },
              h("path", { fill: "none", d: "M0 0h24v24H0z" }),
              h("path", { d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))),
        h("nav", { style: { display: this.isOpen ? 'block' : 'none' }, tabindex: 0, onBlur: () => (this.isOpen = false) },
          h("ul", null, this.menu.map((item) => {
            const depthLevel = 0;
            return (h("u-menuitem", { item: item, depthLevel: depthLevel, onUItemSelect: ({ detail }) => {
                console.log(detail);
              } }));
          }))))));
  }
  static get is() { return "u-floatingmenu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-floatingmenu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-floatingmenu.css"]
  }; }
  static get properties() { return {
    "fixed": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "fixed",
      "reflect": false,
      "defaultValue": "false"
    },
    "menu": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<MenuItem>",
        "resolved": "MenuItem[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "MenuItem": {
            "location": "import",
            "path": "../u-menuitem/u-menuitem"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[\n    { name: '+ New' },\n    { divider: true },\n    {\n      name: 'Edit',\n      subMenu: { items: [{ name: 'Redo' }, { name: 'Undo' }] }\n    },\n    { name: 'Copy' },\n    { divider: true },\n    {\n      name: 'Open Recent',\n      subMenu: {\n        items: [\n          {\n            name: 'HTML',\n            subMenu: {\n              items: [\n                { name: 'index.html' },\n                { name: 'about.html' },\n                { name: 'impressum.html' }\n              ]\n            }\n          },\n          { name: 'Item 2' }\n        ]\n      }\n    }\n  ]"
    }
  }; }
  static get states() { return {
    "drag": {},
    "dragoffset": {},
    "isOpen": {},
    "selected": {}
  }; }
  static get elementRef() { return "el"; }
}
