import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-slider',
  styleUrl: 'w-slider.css',
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
