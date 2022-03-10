import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-list',
  styleUrl: 'u-list.css',
  shadow: true,
})
export class UList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
