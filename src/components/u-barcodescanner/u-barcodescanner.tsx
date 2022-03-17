import {
  Component,
  Host,
  h,
  Prop,
  Method,
  Event,
  EventEmitter,
  State
} from '@stencil/core';

/**
 * @name Barcode Scanner
 * @state 🟡
 * @description This component allows you to scan barcodes and QR codes. It is based on the [Capacitor Barcode Scanner](https://github.com/capacitor-community/barcode-scanner) plugin.
 * @categorie Capacitor Specific
 */
@Component({
  tag: 'u-barcodescanner',
  styleUrl: 'u-barcodescanner.css',
  shadow: true
})
export class UBarcodescanner {
  @State() scannerActive: boolean = false;

  /**
   * [used library](https://github.com/capacitor-community/barcode-scanner)
   */
  @Prop() library: any;

  /**
   * return scanned element
   */
  @Event() uScan: EventEmitter<string>;

  /**
   * event when scan is started
   */
  @Event() uStartScan: EventEmitter<void>;

  /**
   * event when scan is stopped
   */
  @Event() uStopScan: EventEmitter<void>;

  /**
   * force get camera permission
   */
  @Method() async getPermission() {
    await this.library.checkPermission({ force: true });
  }

  /**
   * prepare camera for faster startup
   */
  @Method() async prepareCamera() {
    this.library.prepare();
  }

  /**
   * begin scanning
   */
  @Method() async startScanner() {
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
  @Method() async stopScanner() {
    document.querySelector('body').style.visibility = 'visible';
    this.uStopScan.emit();
    this.scannerActive = false;
    this.library.showBackground();
    this.library.stopScan();
  }

  render() {
    return (
      <Host
        style={{
          display: this.scannerActive ? 'block' : 'none'
        }}
      >
        <u-button id="cancelscan" design="error" outline class="cancel">
          <slot>Zurück</slot>
        </u-button>
      </Host>
    );
  }
}
