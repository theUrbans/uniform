import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-collapsible-group',
  styleUrl: 'u-collapsible-group.css',
  shadow: true
})
export class UCollapsibleGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
