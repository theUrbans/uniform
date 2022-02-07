import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-toggle',
  styleUrl: 'w-toggle.css',
  shadow: true,
})
export class WToggle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
