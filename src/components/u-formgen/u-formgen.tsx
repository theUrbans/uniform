import { Component, Host, h } from '@stencil/core';

/**
 * @name Form Generator
 * @description generate automatic forms with a JSON schema
 * @categorie Generator
 * @slot default - custom content in top of the form
 */
@Component({
  tag: 'u-formgen',
  styleUrl: 'u-formgen.css',
  shadow: true
})
export class UFormgen {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
