import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-form',
  styleUrl: 'w-form.css',
  shadow: true,
})
export class WForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
