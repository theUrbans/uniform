import { Component, h } from '@stencil/core';

/**
 * @name List item
 * @state 🟡
 * @description single list item
 * @slot default - item content
 */
@Component({
  tag: 'u-listitem',
  styleUrl: 'u-listitem.css'
})
export class UListitem {
  render() {
    return (
      <li>
        <slot></slot>
      </li>
    );
  }
}
