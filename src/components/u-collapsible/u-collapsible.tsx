import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-collapsible',
  styleUrl: 'u-collapsible.css',
  shadow: true
})
export class UCollapsible {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
