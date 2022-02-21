import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-cardselect',
  styleUrl: 'u-cardselect.css',
  shadow: true,
})
export class WCardselect {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
