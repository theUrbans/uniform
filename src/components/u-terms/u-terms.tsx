import { Component, Host, h } from '@stencil/core';

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
