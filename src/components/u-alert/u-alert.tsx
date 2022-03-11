import { Component, Host, h } from '@stencil/core';

/**
 * @name Alert
 * @state 🔵
 */
@Component({
  tag: 'u-alert',
  styleUrl: 'u-alert.css',
  shadow: true,
})
export class UAlert {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
