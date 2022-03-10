import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-tablehead',
  styleUrl: 'u-tablehead.css',
  shadow: true,
})
export class UTablehead {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
