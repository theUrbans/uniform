import { Component, Event, h, Prop, State } from '@stencil/core';
/**
 * @name File Picker
 * @state 🟡
 * @description pick single or multiple files
 * @categorie Input Control
 */
export class UFilepicker {
  constructor() {
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
      } }, this.size === 'small' ? (h("u-group", null,
      h("u-button", { rounded: "left" },
        h("svg", { slot: "prefix", fill: "currentColor", height: "18", viewBox: "0 0 24 24", width: "18", xmlns: "http://www.w3.org/2000/svg" },
          h("path", { d: "M0 0h24v24H0z", fill: "none" }),
          h("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })),
        this.label),
      h("u-button", { rounded: "right", design: "primary", outline: true }, this.fileText),
      h("input", { class: "input", type: "file", accept: this.fileEnding, multiple: this.multiple, onChange: this.handleFileInput }))) : (h("div", { onDrop: this.dropHandler, class: "dropzone" },
      h("u-col", { align: "center" },
        h("u-button", { outline: true },
          h("svg", { slot: "prefix", fill: "currentColor", height: "18", viewBox: "0 0 24 24", width: "18", xmlns: "http://www.w3.org/2000/svg" },
            h("path", { d: "M0 0h24v24H0z", fill: "none" }),
            h("path", { d: "M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" })),
          this.label),
        this.fileText),
      h("input", { class: "input", type: "file", accept: this.fileEnding, multiple: this.multiple, onChange: this.handleFileInput })))));
  }
  static get is() { return "u-filepicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-filepicker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-filepicker.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'large'",
        "resolved": "\"large\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'small'"
    },
    "label": {
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
        "text": ""
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'Choose file'"
    },
    "fileEnding": {
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
        "text": ""
      },
      "attribute": "file-ending",
      "reflect": false,
      "defaultValue": "'*'"
    },
    "multiple": {
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
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "noFile": {
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
        "text": ""
      },
      "attribute": "no-file",
      "reflect": false,
      "defaultValue": "'No file selected'"
    },
    "filePlural": {
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
        "text": ""
      },
      "attribute": "file-plural",
      "reflect": false,
      "defaultValue": "'files'"
    }
  }; }
  static get states() { return {
    "file": {},
    "fileText": {}
  }; }
  static get events() { return [{
      "method": "uSelect",
      "name": "uSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "FileList",
        "resolved": "FileList",
        "references": {
          "FileList": {
            "location": "global"
          }
        }
      }
    }]; }
}
