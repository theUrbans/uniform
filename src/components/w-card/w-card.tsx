import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-card',
  styleUrl: 'w-card.css',
  shadow: true,
})
export class WCard {

  render() {
    return (
      <Host>
        <slot></slot>
        <slot></slot>
      </Host>
    );
  }

}
