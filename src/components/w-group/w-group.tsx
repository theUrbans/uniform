import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-group',
  styleUrl: 'w-group.css',
  shadow: true,
})
export class WGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
