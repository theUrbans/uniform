import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-filepicker',
  styleUrl: 'w-filepicker.css',
  shadow: true,
})
export class WFilepicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
