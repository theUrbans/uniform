import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-icon',
  styleUrl: 'u-icon.css',
  shadow: true,
})
export class UIcon {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
