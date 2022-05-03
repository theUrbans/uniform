import { Component, Host, h } from '@stencil/core';
/**
 * @name Card Select
 */

@Component({
  tag: 'u-cardselect',
  styleUrl: 'u-cardselect.css',
  shadow: true
})
export class UCardselect {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
