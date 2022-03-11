import { Component, Host, h } from '@stencil/core';

/**
 * @name Dropdown
 */
@Component({
  tag: 'u-dropdown',
  styleUrl: 'u-dropdown.css',
  shadow: true,
})
export class UDropdown {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
