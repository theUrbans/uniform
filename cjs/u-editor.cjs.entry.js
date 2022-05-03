'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uEditorCss = ":host{display:block;position:relative}.toolbar{position:absolute}";

let UEditor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "toolbar" }, index.h("w-group", null, index.h("w-button", { outline: true, design: "secondary", rounded: "left" }, "a"), index.h("w-button", { outline: true, design: "secondary", rounded: "none" }, "b"), index.h("w-button", { outline: true, design: "secondary", rounded: "right" }, "c"))), index.h("u-textarea", null)));
  }
};
UEditor.style = uEditorCss;

exports.u_editor = UEditor;
