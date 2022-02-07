import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-alert',
  styleUrl: 'w-alert.css',
  shadow: true,
})
export class WAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
