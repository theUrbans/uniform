import { Component, Host, h } from '@stencil/core';

/**
 * @name List
 */
@Component({
  tag: 'u-list',
  styleUrl: 'u-list.css',
  shadow: true,
})
export class UList {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
