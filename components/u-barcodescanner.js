import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './u-button2.js';

const uBarcodescannerCss = ".cancel{position:absolute;bottom:1rem;width:100%}";

let UBarcodescanner$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.uScan = createEvent(this, "uScan", 7);
    this.uStartScan = createEvent(this, "uStartScan", 7);
    this.uStopScan = createEvent(this, "uStopScan", 7);
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
      } }, h("u-button", { id: "cancelscan", design: "error", outline: true, class: "cancel" }, h("slot", null, "Zur\u00FCck"))));
  }
  static get style() { return uBarcodescannerCss; }
};
UBarcodescanner$1 = /*@__PURE__*/ proxyCustomElement(UBarcodescanner$1, [1, "u-barcodescanner", {
    "library": [8],
    "scannerActive": [32],
    "getPermission": [64],
    "prepareCamera": [64],
    "startScanner": [64],
    "stopScanner": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["u-barcodescanner", "u-button"];
  components.forEach(tagName => { switch (tagName) {
    case "u-barcodescanner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UBarcodescanner$1);
      }
      break;
    case "u-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UBarcodescanner = UBarcodescanner$1;
const defineCustomElement = defineCustomElement$1;

export { UBarcodescanner, defineCustomElement };
