import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @name Barcode Scanner
 * @state 🟡
 * @description This component allows you to scan barcodes and QR codes. It is based on the [Capacitor Barcode Scanner](https://github.com/capacitor-community/barcode-scanner) plugin.
 * @categorie Capacitor Specific
 */
export declare class UBarcodescanner {
  scannerActive: boolean;
  /**
   * [used library](https://github.com/capacitor-community/barcode-scanner)
   */
  library: any;
  /**
   * return scanned element
   */
  uScan: EventEmitter<string>;
  /**
   * event when scan is started
   */
  uStartScan: EventEmitter<void>;
  /**
   * event when scan is stopped
   */
  uStopScan: EventEmitter<void>;
  /**
   * force get camera permission
   */
  getPermission(): Promise<void>;
  /**
   * prepare camera for faster startup
   */
  prepareCamera(): Promise<void>;
  /**
   * begin scanning
   */
  startScanner(): Promise<void>;
  /**
   * cancel scanning
   */
  stopScanner(): Promise<void>;
  render(): any;
}
