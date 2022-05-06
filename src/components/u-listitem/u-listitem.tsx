import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-listitem',
  styleUrl: 'u-listitem.css',
  shadow: true
})
export class UListitem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
