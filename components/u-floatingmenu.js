import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2, a as defineCustomElement$3 } from './u-menuitem2.js';

const uFloatingmenuCss = ":host{position:absolute;top:8rem;left:8rem}.button{--tw-bg-opacity:1;background-color:rgba(249, 168, 212, var(--tw-bg-opacity));border-radius:9999px;display:-ms-grid;display:grid;place-content:center;height:3rem;position:relative;width:3rem;z-index:300}nav{--tw-bg-opacity:1;background-color:rgba(156, 163, 175, var(--tw-bg-opacity));border-radius:0.75rem;padding:0.5rem;position:absolute;top:100%;z-index:300}ul{list-style-type:none;margin:0px;padding:0px}hr{margin:0px}li:hover{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity))}li{border-radius:0.25rem;cursor:pointer;display:block;padding:0.25rem;white-space:nowrap}";

let UFloatingmenu$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h(Host, null, h("div", { ref: (e) => (this.node = e), class: "button" }, h("div", { onPointerDown: (e) => this.onPointerDown(e), onPointerUp: () => this.onPointerUp(), onPointerMove: (e) => this.onPointerMove(e), onClick: () => (this.isOpen = !this.isOpen) }, h("slot", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" }, h("path", { fill: "none", d: "M0 0h24v24H0z" }), h("path", { d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))), h("nav", { style: { display: this.isOpen ? 'block' : 'none' }, tabindex: 0, onBlur: () => (this.isOpen = false) }, h("ul", null, this.menu.map((item) => {
      const depthLevel = 0;
      return (h("u-menuitem", { item: item, depthLevel: depthLevel, onUItemSelect: ({ detail }) => {
          console.log(detail);
        } }));
    }))))));
  }
  get el() { return this; }
  static get style() { return uFloatingmenuCss; }
};
UFloatingmenu$1 = /*@__PURE__*/ proxyCustomElement(UFloatingmenu$1, [1, "u-floatingmenu", {
    "fixed": [4],
    "menu": [16],
    "drag": [32],
    "dragoffset": [32],
    "isOpen": [32],
    "selected": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-floatingmenu", "u-menuitem", "u-submenu"];
  components.forEach(tagName => { switch (tagName) {
    case "u-floatingmenu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UFloatingmenu$1);
      }
      break;
    case "u-menuitem":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-submenu":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UFloatingmenu = UFloatingmenu$1;
const defineCustomElement = defineCustomElement$1;

export { UFloatingmenu, defineCustomElement };
