import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-slider',
  styleUrl: 'u-slider.css',
  shadow: true,
})
export class WSlider {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
