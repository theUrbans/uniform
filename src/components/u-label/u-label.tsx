import { Component, Host, h } from '@stencil/core';

/**
 * @name Label
 */
@Component({
  tag: 'u-label',
  styleUrl: 'u-label.css',
  shadow: true
})
export class ULabel {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
