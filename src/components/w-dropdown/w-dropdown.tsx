import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-dropdown',
  styleUrl: 'w-dropdown.css',
  shadow: true,
})
export class WDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
