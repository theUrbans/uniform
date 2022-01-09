import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'Row',
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
