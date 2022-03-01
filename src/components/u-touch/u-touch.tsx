import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-touch',
  styleUrl: 'u-touch.css',
  shadow: true,
})
export class UTouch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
