import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-col',
  styleUrl: 'w-col.css',
  shadow: true,
})
export class WCol {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
