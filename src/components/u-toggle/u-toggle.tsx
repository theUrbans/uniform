import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-toggle',
  styleUrl: 'u-toggle.css',
  shadow: true,
})
export class WToggle {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
