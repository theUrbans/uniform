import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-weekpicker',
  styleUrl: 'u-weekpicker.css',
  shadow: true,
})
export class UWeekpicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
