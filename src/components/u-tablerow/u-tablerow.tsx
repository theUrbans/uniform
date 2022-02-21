import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-tablerow',
  styleUrl: 'u-tablerow.css',
  shadow: true,
})
export class UTablerow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
