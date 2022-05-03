import { r as registerInstance, c as createEvent, h, H as Host } from './index-4f6a2e7b.js';

const uBarcodescannerCss = ".cancel{position:absolute;bottom:1rem;width:100%}";

let UBarcodescanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
UBarcodescanner.style = uBarcodescannerCss;

export { UBarcodescanner as u_barcodescanner };
