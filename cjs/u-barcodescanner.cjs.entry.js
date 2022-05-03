'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d55ac51.js');

const uBarcodescannerCss = ".cancel{position:absolute;bottom:1rem;width:100%}";

let UBarcodescanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uScan = index.createEvent(this, "uScan", 7);
    this.uStartScan = index.createEvent(this, "uStartScan", 7);
    this.uStopScan = index.createEvent(this, "uStopScan", 7);
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
    return (index.h(index.Host, { style: {
        display: this.scannerActive ? 'block' : 'none'
      } }, index.h("u-button", { id: "cancelscan", design: "error", outline: true, class: "cancel" }, index.h("slot", null, "Zur\u00FCck"))));
  }
};
UBarcodescanner.style = uBarcodescannerCss;

exports.u_barcodescanner = UBarcodescanner;
