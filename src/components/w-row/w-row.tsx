import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-row',
  styleUrl: 'w-row.css',
  shadow: true,
})
export class WRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
