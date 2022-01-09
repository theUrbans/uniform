import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-input',
  styleUrl: 'w-input.css',
  shadow: true,
})
export class WInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
