import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-textarea',
  styleUrl: 'w-textarea.css',
  shadow: true,
})
export class WTextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
