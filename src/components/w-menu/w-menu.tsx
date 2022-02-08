import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-menu',
  styleUrl: 'w-menu.css',
  shadow: true,
})
export class WMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
