import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-tabs',
  styleUrl: 'w-tabs.css',
  shadow: true,
})
export class WTabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
