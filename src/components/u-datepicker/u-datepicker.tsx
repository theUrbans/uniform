import { Component, Host, h } from '@stencil/core';
/**
 * @name Date Picker
 * @categorie Input Control
 */
@Component({
  tag: 'u-datepicker',
  styleUrl: 'u-datepicker.css',
  shadow: true
})
export class UDatepicker {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
