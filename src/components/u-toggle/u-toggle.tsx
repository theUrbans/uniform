import { Component, Host, h } from '@stencil/core';

/**
 * @name Toggle
 * @categorie Input Control
 */
@Component({
  tag: 'u-toggle',
  styleUrl: 'u-toggle.css',
  shadow: true
})
export class UToggle {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
