import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-colorpicker',
  styleUrl: 'u-colorpicker.css',
  shadow: true,
})
export class UColorpicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
