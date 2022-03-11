import { Component, Host, h } from '@stencil/core';

/**
 * @name Headline
 */
@Component({
  tag: 'u-headline',
  styleUrl: 'u-headline.css',
  shadow: true,
})
export class UHeadline {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
