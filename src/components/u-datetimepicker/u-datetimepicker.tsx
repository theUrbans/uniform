import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-datetimepicker',
  styleUrl: 'u-datetimepicker.css',
  shadow: true,
})
export class UDatetimepicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
