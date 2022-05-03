import { Component, Host, h, Method, State, Prop, Watch, Listen } from '@stencil/core';
/**
 * @name Notification
 * @state 🟡
 * @description Toast like notifications
 */
export class UNotification {
  constructor() {
    this.position = 'top-right';
    this.type = 'default';
    this.notifications = [];
    this.intervalls = [];
    this.newNotification = null;
  }
  notificationsChanged(notification) {
    // notification.progress = 100;
    // this.intervalls.push(
    //   setInterval(() => {
    //     notification = { ...notification, progress: (notification.progress -= 100 / (notification.delay / 100)) };
    //     console.log(notification.progress);
    //   }, 100),
    // );
    if (this.position.includes('top')) {
      this.notifications = [...this.notifications, notification];
      setTimeout(() => {
        this.notifications = this.notifications.slice(1, this.notifications.length);
        clearInterval(this.intervalls[0]);
        this.intervalls = this.intervalls.slice(1, this.intervalls.length);
        console.log(this.intervalls);
      }, notification.delay);
    }
    if (this.position.includes('bottom')) {
      this.notifications = [notification, ...this.notifications];
      setTimeout(() => {
        this.notifications = this.notifications.slice(0, this.notifications.length - 1);
        clearInterval(this.intervalls[0]);
      }, notification.delay);
    }
    console.log(this.intervalls);
  }
  showToast(event) {
    this.show(event.detail.type, Object.assign({}, event.detail));
  }
  clearToast() {
    this.notifications = [];
  }
  async show(type, options) {
    this.type = type || 'default';
    this.newNotification = {
      title: options.title,
      message: options.message,
      delay: options.delay || 3000,
      action: options.buttons || []
    };
  }
  async success(title, message, delay) {
    await this.show('success', { title, message, delay });
  }
  async error(title, message, delay) {
    await this.show('error', { title, message, delay });
  }
  async warning(title, message, delay) {
    await this.show('warning', { title, message, delay });
  }
  handleClose(notification) {
    this.notifications = this.notifications.filter((n) => n !== notification);
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          [this.position]: true,
          list: true
        } }, this.notifications.map((notification) => (h("div", { class: {
          notification: true,
          [this.type]: true
        } },
        h("div", { class: "close", onClick: () => this.handleClose(notification) }, "\u00D7"),
        h("h1", null, notification.title),
        notification.message && h("p", null, notification.message)))))));
  }
  static get is() { return "u-notification"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-notification.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-notification.css"]
  }; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'top-right'\n    | 'top-left'\n    | 'bottom-right'\n    | 'bottom-left'\n    | 'top-center'\n    | 'bottom-center'",
        "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'top-right'"
    }
  }; }
  static get states() { return {
    "type": {},
    "notifications": {},
    "intervalls": {},
    "newNotification": {}
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "(type: NotificationType, options: NotficationOption) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "NotificationType": {
            "location": "local"
          },
          "NotficationOption": {
            "location": "local"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "success": {
      "complexType": {
        "signature": "(title: string, message?: string, delay?: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
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
        "text": "",
        "tags": []
      }
    },
    "error": {
      "complexType": {
        "signature": "(title: string, message?: string, delay?: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
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
        "text": "",
        "tags": []
      }
    },
    "warning": {
      "complexType": {
        "signature": "(title: string, message?: string, delay?: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "newNotification",
      "methodName": "notificationsChanged"
    }]; }
  static get listeners() { return [{
      "name": "show-toast",
      "method": "showToast",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "clear-toast",
      "method": "clearToast",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
