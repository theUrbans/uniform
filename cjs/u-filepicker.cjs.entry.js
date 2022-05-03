'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uFilepickerCss = ".input{cursor:pointer;display:block;height:100%;opacity:0;position:absolute;left:0px;top:0px;width:100%}.label{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity));border-top-right-radius:0.75rem;border-bottom-right-radius:0.75rem;border-style:solid}.small{max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;position:relative}.large{max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content;position:relative;width:100%}.dropzone{border-radius:1rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(156, 163, 175, var(--tw-border-opacity));border-style:dotted;border-width:2px;display:-ms-grid;display:grid;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;place-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;margin:0px;padding:1.5rem;position:relative;--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}";

let UFilepicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uSelect = index.createEvent(this, "uSelect", 7);
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
    return (index.h("div", { class: {
        [this.size]: true
      } }, this.size === 'small' ? (index.h("u-group", null, index.h("u-button", { rounded: "left" }, index.h("svg", { slot: "prefix", fill: "currentColor", height: "18", viewBox: "0 0 24 24", width: "18", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M0 0h24v24H0z", fill: "none" }), index.h("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })), this.label), index.h("u-button", { rounded: "right", design: "primary", outline: true }, this.fileText), index.h("input", { class: "input", type: "file", accept: this.fileEnding, multiple: this.multiple, onChange: this.handleFileInput }))) : (index.h("div", { onDrop: this.dropHandler, class: "dropzone" }, index.h("u-col", { align: "center" }, index.h("u-button", { outline: true }, index.h("svg", { slot: "prefix", fill: "currentColor", height: "18", viewBox: "0 0 24 24", width: "18", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M0 0h24v24H0z", fill: "none" }), index.h("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })), this.label), this.fileText), index.h("input", { class: "input", type: "file", accept: this.fileEnding, multiple: this.multiple, onChange: this.handleFileInput })))));
  }
};
UFilepicker.style = uFilepickerCss;

exports.u_filepicker = UFilepicker;
