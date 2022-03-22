import { Component, h, Prop } from '@stencil/core';

/**
 * @name List
 */
@Component({
  tag: 'u-list',
  styleUrl: 'u-list.css'
})
export class UList {
  /**
   * list as row(x) or as column(y)
   */
  @Prop() alignment: 'x' | 'y' = 'y';

  render() {
    return (
      <ul class={{ [this.alignment]: true }}>
        <slot></slot>
      </ul>
    );
  }
}
