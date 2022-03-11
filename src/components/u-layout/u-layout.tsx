import { Component, Host, h } from '@stencil/core';

/**
 * @name Layout
 * @description layout which decide if mobile or desktop layout should be used
 */
@Component({
  tag: 'u-layout',
  styleUrl: 'u-layout.css',
  shadow: true,
})
export class ULayout {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
