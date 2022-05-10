import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-tabletlayout',
  styleUrl: 'u-tabletlayout.css',
  shadow: true
})
export class UTabletlayout {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
