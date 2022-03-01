import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-link',
  styleUrl: 'u-link.css',
  shadow: true,
})
export class ULink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
