import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-cardselect',
  styleUrl: 'w-cardselect.css',
  shadow: true,
})
export class WCardselect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
