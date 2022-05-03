import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './u-button2.js';
import { d as defineCustomElement$3 } from './u-col2.js';
import { d as defineCustomElement$2 } from './u-group2.js';

const uFilepickerCss = ".input{cursor:pointer;display:block;height:100%;opacity:0;position:absolute;left:0px;top:0px;width:100%}.label{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-top-right-radius:0.75rem;border-bottom-right-radius:0.75rem;border-style:solid}.small{max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;position:relative}.large{max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content;position:relative;width:100%}.dropzone{border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(156, 163, 175, var(--tw-border-opacity));border-style:dotted;border-width:2px;display:-ms-grid;display:grid;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;place-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;margin:0px;padding:1.5rem;position:relative;--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}";

let UFilepicker$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.uSelect = createEvent(this, "uSelect", 7);
    this.size = 'small';
    this.label = 'Choose file';
    this.fileEnding = '*';
    this.multiple = false;
    this.noFile = 'No file selected';
    this.filePlural = 'files';
    this.handleFileInput = (event) => {
      const file = event.target.files;
      this.file = file;
      this.getFileText();
      this.uSelect.emit(this.file);
    };
    this.fileText = this.noFile;
  }
  dropHandler(e) {
    e.preventDefault();
    const { files } = e.dataTransfer;
    this.file = files;
    this.getFileText();
    this.uSelect.emit(this.file);
  }
  getFileText() {
    if (this.file) {
      if (this.file.length === 1) {
        this.fileText = this.file[0].name;
      }
      else {
        this.fileText = `${this.file.length} ${this.filePlural}`;
      }
    }
    else {
      this.fileText = this.noFile;
    }
  }
  render() {
    return (h("div", { class: {
        [this.size]: true
      } }, this.size === 'small' ? (h("u-group", null, h("u-button", { rounded: "left" }, h("svg", { slot: "prefix", fill: "currentColor", height: "18", viewBox: "0 0 24 24", width: "18", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })), this.label), h("u-button", { rounded: "right", design: "primary", outline: true }, this.fileText), h("input", { class: "input", type: "file", accept: this.fileEnding, multiple: this.multiple, onChange: this.handleFileInput }))) : (h("div", { onDrop: this.dropHandler, class: "dropzone" }, h("u-col", { align: "center" }, h("u-button", { outline: true }, h("svg", { slot: "prefix", fill: "currentColor", height: "18", viewBox: "0 0 24 24", width: "18", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })), this.label), this.fileText), h("input", { class: "input", type: "file", accept: this.fileEnding, multiple: this.multiple, onChange: this.handleFileInput })))));
  }
  static get style() { return uFilepickerCss; }
};
UFilepicker$1 = /*@__PURE__*/ proxyCustomElement(UFilepicker$1, [1, "u-filepicker", {
    "size": [1],
    "label": [1],
    "fileEnding": [1, "file-ending"],
    "multiple": [4],
    "noFile": [1, "no-file"],
    "filePlural": [1, "file-plural"],
    "file": [32],
    "fileText": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-filepicker", "u-button", "u-col", "u-group"];
  components.forEach(tagName => { switch (tagName) {
    case "u-filepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UFilepicker$1);
      }
      break;
    case "u-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "u-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "u-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UFilepicker = UFilepicker$1;
const defineCustomElement = defineCustomElement$1;

export { UFilepicker, defineCustomElement };
