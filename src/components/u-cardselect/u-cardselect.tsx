import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-cardselect',
  styleUrl: 'u-cardselect.css',
  shadow: true,
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
