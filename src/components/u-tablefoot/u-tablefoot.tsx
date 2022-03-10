import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-tablefoot',
  styleUrl: 'u-tablefoot.css',
  shadow: true,
})
export class UTablefoot {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
