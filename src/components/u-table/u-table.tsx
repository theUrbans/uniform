import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-table',
  styleUrl: 'u-table.css',
  shadow: true,
})
export class UTable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
