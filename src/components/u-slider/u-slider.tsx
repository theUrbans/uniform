import { Component, Host, h } from '@stencil/core';

/**
 * @name Slider
 * @description input slider
 */
@Component({
  tag: 'u-slider',
  styleUrl: 'u-slider.css',
  shadow: true
})
export class USlider {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
