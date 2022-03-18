import { Component, Host, h } from '@stencil/core';

/**
 * @name Tabs
 */
@Component({
  tag: 'u-tabs',
  styleUrl: 'u-tabs.css',
  shadow: true
})
export class UTabs {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
