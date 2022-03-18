import { Component, Host, h } from '@stencil/core';

/**
 * @name Color Picker
 */
@Component({
  tag: 'u-colorpicker',
  styleUrl: 'u-colorpicker.css',
  shadow: true
})
export class UColorpicker {
  render() {
    return (
      <Host>
        <input type="color" />
      </Host>
    );
  }
}
