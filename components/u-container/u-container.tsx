import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-container',
  styleUrl: 'u-container.css',
  shadow: true
})
export class UContainer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
