import { Component, Host, h } from '@stencil/core';

/**
 * @name Time picker
 */
@Component({
  tag: 'u-timepicker',
  styleUrl: 'u-timepicker.css',
  shadow: true,
})
export class UTimepicker {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
