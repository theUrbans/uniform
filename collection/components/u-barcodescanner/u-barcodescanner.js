import { Component, Host, h, Prop, Method, Event, State } from '@stencil/core';
/**
 * @name Barcode Scanner
 * @state 🟡
 * @description This component allows you to scan barcodes and QR codes. It is based on the [Capacitor Barcode Scanner](https://github.com/capacitor-community/barcode-scanner) plugin.
 * @categorie Capacitor Specific
 */
export class UBarcodescanner {
  constructor() {
    this.scannerActive = false;
  }
  /**
   * force get camera permission
   */
  async getPermission() {
    await this.library.checkPermission({ force: true });
  }
  /**
   * prepare camera for faster startup
   */
  async prepareCamera() {
    this.library.prepare();
  }
  /**
   * begin scanning
   */
  async startScanner() {
    document.querySelector('body').style.visibility = 'hidden';
    document.getElementById('cancelscan').style.visibility = 'visible';
    this.uStartScan.emit();
    this.scannerActive = true;
    this.library.hideBackground();
    const result = await this.library.startScan();
    if (result.hasContent) {
      this.stopScanner();
      this.uScan.emit(result.content);
    }
  }
  /**
   * cancel scanning
   */
  async stopScanner() {
    document.querySelector('body').style.visibility = 'visible';
    this.uStopScan.emit();
    this.scannerActive = false;
    this.library.showBackground();
    this.library.stopScan();
  }
  render() {
    return (h(Host, { style: {
        display: this.scannerActive ? 'block' : 'none'
      } },
      h("u-button", { id: "cancelscan", design: "error", outline: true, class: "cancel" },
        h("slot", null, "Zur\u00FCck"))));
  }
  static get is() { return "u-barcodescanner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["u-barcodescanner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["u-barcodescanner.css"]
  }; }
  static get properties() { return {
    "library": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[used library](https://github.com/capacitor-community/barcode-scanner)"
      },
      "attribute": "library",
      "reflect": false
    }
  }; }
  static get states() { return {
    "scannerActive": {}
  }; }
  static get events() { return [{
      "method": "uScan",
      "name": "uScan",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "return scanned element"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "uStartScan",
      "name": "uStartScan",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "event when scan is started"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "uStopScan",
      "name": "uStopScan",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "event when scan is stopped"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getPermission": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "force get camera permission",
        "tags": []
      }
    },
    "prepareCamera": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "prepare camera for faster startup",
        "tags": []
      }
    },
    "startScanner": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "begin scanning",
        "tags": []
      }
    },
    "stopScanner": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "cancel scanning",
        "tags": []
      }
    }
  }; }
}
