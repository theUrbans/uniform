import { Component, Host, h } from '@stencil/core';

/**
 * @name List
 */
@Component({
  tag: 'u-list',
  styleUrl: 'u-list.css',
})
export class UList {
  render() {
    return (
      <Host
        class={{
          list: true,
        }}
      ></Host>
    );
  }
}
