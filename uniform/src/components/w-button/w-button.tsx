import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-button',
  styleUrl: 'w-button.css',
  shadow: true,
})
export class WButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
