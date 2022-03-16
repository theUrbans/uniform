import { Component, Host, h } from '@stencil/core';

/**
 * @name Week Picker
 * @categorie Input Control
 */
@Component({
  tag: 'u-weekpicker',
  styleUrl: 'u-weekpicker.css',
  shadow: true
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
