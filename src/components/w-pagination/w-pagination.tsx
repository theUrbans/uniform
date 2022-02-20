import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-pagination',
  styleUrl: 'w-pagination.css',
  shadow: true,
})
export class WPagination {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
