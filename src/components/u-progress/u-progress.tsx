import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-progress',
  styleUrl: 'u-progress.css',
  shadow: true,
})
export class UProgress {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
