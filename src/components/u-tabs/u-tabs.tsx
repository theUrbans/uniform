import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-tabs',
  styleUrl: 'u-tabs.css',
  shadow: true,
})
export class WTabs {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
