import { Component, Host, h } from '@stencil/core';

/**
 * @name Item
 */
@Component({
  tag: 'u-item',
  styleUrl: 'u-item.css',
  shadow: true
})
export class UItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
