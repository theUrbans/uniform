import { r as registerInstance, h, H as Host } from './index-4f6a2e7b.js';

const uEditorCss = ":host{display:block;position:relative}.toolbar{position:absolute}";

let UEditor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "toolbar" }, h("w-group", null, h("w-button", { outline: true, design: "secondary", rounded: "left" }, "a"), h("w-button", { outline: true, design: "secondary", rounded: "none" }, "b"), h("w-button", { outline: true, design: "secondary", rounded: "right" }, "c"))), h("u-textarea", null)));
  }
};
UEditor.style = uEditorCss;

export { UEditor as u_editor };
