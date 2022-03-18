import { Component, Host, h } from '@stencil/core';

/**
 * @name Table Head
 */
@Component({
  tag: 'u-tablehead',
  styleUrl: 'u-tablehead.css',
  shadow: true
})
export class UTablehead {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
