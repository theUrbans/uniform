import { Component, h, Prop, Method, Listen, State, Event, Element } from '@stencil/core';
/**
 * @name Modal
 * @state 🟡
 * @description A modal window that can be used to display information to the user.
 * @categorie Modal
 * @slot header - The header of the modal
 * @slot body - The body of the modal
 */
export class UModal {
  constructor() {
    /**
     * should the modal be closed on backdrop click
     */
    this.closeOnClick = true;
    /**
     * display a close button in the top right corner
     */
    this.topRightClose = false;
    /**
     * (DESKTOP only) should the modal be moveable by dragging the header
     */
    this.moveable = true;
    /**
     * (DESKTOP only) reset the modal position to the center of the screen
     */
    this.resetPosition = true;
    /**
     * (DESKTOP only) should the modal be resizable
     */
    this.resizeable = true;
    /**
     * autoset mode for mobile or desktop
     */
    this.mode = 'desktop';
    /**
     * (DESKTOP only) resizable min width
     */
    this.minWidth = 'auto';
    /**
     * (DESKTOP only) resizable min height
     */
    this.minHeight = 'auto';
    /**
     * (DESKTOP only) resizable max width
     */
    this.maxHeight = 'auto';
    /**
     * (DESKTOP only) resizable max height
     */
    this.maxWidth = 'auto';
    this.isOpen = false;
    this.handleCloseClick = (_e) => {
      this.closeModal(this.name);
    };
    this.handleBlur = (e) => {
      if (!e.target.className.includes('wrapper') || !this.closeOnClick)
        return;
      this.closeModal(this.name);
    };
    this.drag = false;
    this.handleStartDrag = (e) => {
      if (!this.moveable)
        return;
      e.preventDefault();
      this.drag = true;
      this.dragoffset = {
        x: e.pageX - this.node.offsetLeft,
        y: e.pageY - this.node.offsetTop
      };
    };
    this.mouseUp = () => {
      this.drag = false;
    };
    this.handleMove = (e) => {
      if (!this.drag || !this.node || !this.moveable)
        return;
      let newtop = '0px';
      let newleft = '0px';
      if (e.pageX - this.dragoffset.x < 0)
        newleft = '0px';
      else if (e.pageX - this.dragoffset.x + this.node.clientWidth >
        window.innerWidth)
        newleft = `${window.innerWidth - this.node.clientWidth}px`;
      else
        newleft = `${e.pageX - this.dragoffset.x}px`;
      if (e.pageY - this.dragoffset.y < 0)
        newtop = '0px';
      else if (e.pageY - this.dragoffset.y + this.node.clientHeight >
        window.innerHeight)
        newtop = `${window.innerHeight - this.node.clientHeight}px`;
      else
        newtop = `${e.pageY - this.dragoffset.y}px`;
      this.node.style.left = newleft;
      this.node.style.top = newtop;
    };
  }
  showModalHandler(e) {
    const { name, params } = e.detail;
    this.beforeOpen.emit(params);
    console.log('show modal', name);
    this.showModal(name);
  }
  closeModalHandler(e) {
    const { name } = e.detail;
    this.closeModal(name);
  }
  setParams(params) {
    this.params = params.detail;
  }
  /**
   * method to open the modal
   */
  async showModal(name) {
    if (name === this.name) {
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }
  /**
   * method to close the modal
   */
  async closeModal(name) {
    if (name === this.name) {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    }
    if (this.resetPosition)
      this.initPosition();
  }
  async initPosition() {
    const modal = this.node;
    if (!modal)
      return;
    modal.style.removeProperty('top');
    modal.style.removeProperty('left');
    modal.style.removeProperty('width');
    modal.style.removeProperty('height');
  }
  render() {
    return (h("div", { class: {
        wrapper: true,
        visible: this.isOpen
      }, onPointerDown: (e) => this.handleBlur(e), onPointerMove: (e) => this.handleMove(e), onPointerUp: () => this.mouseUp(), onClick: (e) => e.preventDefault() },
      this.topRightClose && (h("button", { class: "close backdrop__close", onClick: this.handleCloseClick }, "\u00D7")),
      h("div", { class: {
          modal: true,
          resizeable: this.resizeable
        }, id: "modal", ref: (node) => (this.node = node), style: {
          'min-width': this.minWidth,
          'min-height': this.minHeight,
          'max-width': this.maxWidth,
          'max-height': this.maxHeight
        } },
        h("div", { class: "header", onPointerDown: (e) => this.handleStartDrag(e) },
          h("span", { class: "header__title" },
            h("slot", { name: "header" })),
          h("button", { class: "close header__close", onClick: this.handleCloseClick }, "\u00D7")),
        h("div", { class: {
            content: true
          } },
          h("div", { style: {
              'min-width': this.minWidth,
              'min-height': this.minHeight,
              'max-width': this.maxWidth,
              'max-height': this.maxHeight,
              visibility: this.isOpen ? 'visible' : 'hidden'
            } },
            h("slot", { name: "body" }))))));
  }
  static get is() { return "u-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "desktop": ["u-modal.desktop.scss"],
    "mobile": ["u-modal.mobile.scss"]
  }; }
  static get styleUrls() { return {
    "desktop": ["u-modal.desktop.css"],
    "mobile": ["u-modal.mobile.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "name of the modal - needed to call methods"
      },
      "attribute": "name",
      "reflect": false
    },
    "closeOnClick": {
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
        "text": "should the modal be closed on backdrop click"
      },
      "attribute": "close-on-click",
      "reflect": false,
      "defaultValue": "true"
    },
    "topRightClose": {
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
        "text": "display a close button in the top right corner"
      },
      "attribute": "top-right-close",
      "reflect": false,
      "defaultValue": "false"
    },
    "moveable": {
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
        "text": "(DESKTOP only) should the modal be moveable by dragging the header"
      },
      "attribute": "moveable",
      "reflect": false,
      "defaultValue": "true"
    },
    "resetPosition": {
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
        "text": "(DESKTOP only) reset the modal position to the center of the screen"
      },
      "attribute": "reset-position",
      "reflect": false,
      "defaultValue": "true"
    },
    "resizeable": {
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
        "text": "(DESKTOP only) should the modal be resizable"
      },
      "attribute": "resizeable",
      "reflect": false,
      "defaultValue": "true"
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'desktop' | 'mobile'",
        "resolved": "\"desktop\" | \"mobile\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "autoset mode for mobile or desktop"
      },
      "attribute": "mode",
      "reflect": true,
      "defaultValue": "'desktop'"
    },
    "minWidth": {
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
        "text": "(DESKTOP only) resizable min width"
      },
      "attribute": "min-width",
      "reflect": false,
      "defaultValue": "'auto'"
    },
    "minHeight": {
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
        "text": "(DESKTOP only) resizable min height"
      },
      "attribute": "min-height",
      "reflect": false,
      "defaultValue": "'auto'"
    },
    "maxHeight": {
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
        "text": "(DESKTOP only) resizable max width"
      },
      "attribute": "max-height",
      "reflect": false,
      "defaultValue": "'auto'"
    },
    "maxWidth": {
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
        "text": "(DESKTOP only) resizable max height"
      },
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "'auto'"
    }
  }; }
  static get states() { return {
    "isOpen": {},
    "params": {},
    "drag": {},
    "dragoffset": {}
  }; }
  static get events() { return [{
      "method": "beforeOpen",
      "name": "beforeOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "event with given params"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "showModal": {
      "complexType": {
        "signature": "(name: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "method to open the modal",
        "tags": []
      }
    },
    "closeModal": {
      "complexType": {
        "signature": "(name: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "method to close the modal",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "show-modal",
      "method": "showModalHandler",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "close-modal",
      "method": "closeModalHandler",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "beforeOpen",
      "method": "setParams",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
