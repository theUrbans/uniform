import { Component, Host, h, Prop, Method, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'u-barcodescanner',
  styleUrl: 'u-barcodescanner.css',
  shadow: true,
})
export class UBarcodescanner {
  @Prop() library: any;
  @State() scannerActive: boolean = false;
  @Event() uScan: EventEmitter;
  @Event() uStartScan: EventEmitter;
  @Event() uStopScan: EventEmitter;
  @Method() async getPermission() {
    await this.library.checkPermission({ force: true });
  }
  @Method() async prepareCamera() {
    this.library.prepare();
  }
  @Method() async startScanner() {
    this.uStartScan.emit();
    this.scannerActive = true;
    this.library.hideBackground();
    const result = await this.library.startScan();
    if (result.hasContent) {
      this.stopScanner();
      this.uScan.emit(result.content);
    }
  }
  @Method() async stopScanner() {
    this.uStopScan.emit();
    this.scannerActive = false;
    this.library.showBackground();
    this.library.stopScan();
  }
  render() {
    return (
      <Host
        style={{
          display: this.scannerActive ? 'none' : 'block',
        }}
      >
        <u-button design="error" outline class="cancel">
          <slot>Zurück</slot>
        </u-button>
      </Host>
    );
  }
}
