import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-spoiler',
  styleUrl: 'w-spoiler.css',
  shadow: true,
})
export class WSpoiler {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
