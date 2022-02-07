import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-icon',
  styleUrl: 'w-icon.css',
  shadow: true,
})
export class WIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
