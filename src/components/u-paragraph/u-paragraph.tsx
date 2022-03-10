import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'u-paragraph',
  styleUrl: 'u-paragraph.css',
  shadow: true,
})
export class UParagraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
