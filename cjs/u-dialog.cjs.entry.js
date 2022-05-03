'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-456fcfb4.js');

const uDialogDesktopCss = ":host{display:block}.body{padding:0.5rem}.actions{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0.5rem}";

const uDialogMobileCss = ".content{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:100%}";

let UDialog = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = 'u-dialog-default';
    this.open = false;
    this.title = 'u-dialog title';
    this.content = '';
    this.buttons = [{ title: 'OK' }];
  }
  openDialog(e) {
    const { params } = e.detail;
    // if (name === this.name) this.open = true;
    this.title = params.title || '';
    this.content = params.content || '';
    this.buttons = params.buttons || [{ title: 'OK' }];
    this.modal.showModal(this.name);
  }
  render() {
    return (index.h(index.Host, null, index.h("u-modal", { name: this.name, ref: (modal) => (this.modal = modal), resizeable: false, moveable: false, closeOnClick: false }, index.h("span", { slot: "header" }, this.title), index.h("div", { slot: "body", class: "body" }, index.h("p", null, this.content), index.h("div", { class: "actions" }, this.buttons.map((action) => (index.h("u-button", { design: action.design || 'secondary', outline: true, onClick: action.handler
        ? action.handler
        : () => this.modal.closeModal(this.name) }, action.title))))))));
  }
};
UDialog.style = {
  desktop: uDialogDesktopCss,
  mobile: uDialogMobileCss
};

exports.u_dialog = UDialog;
