import { Component, Host, h } from '@stencil/core';

/**
 * @name Date Time Picker
 * @categorie Input Control
 */
@Component({
  tag: 'u-datetimepicker',
  styleUrl: 'u-datetimepicker.css',
  shadow: true
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
