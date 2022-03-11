import { Component, Host, h } from '@stencil/core';

/**
 * @name Terms
 * @description term popup
 */
@Component({
  tag: 'u-terms',
  styleUrl: 'u-terms.css',
  shadow: true,
})
export class UTerms {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
