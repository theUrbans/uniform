import { Component, h, Prop } from '@stencil/core';

/**
 * @name Group
 * @state 🟡
 * @description This component allows you to display a group of elements.
 */
@Component({
  tag: 'u-group',
  styleUrl: 'u-group.css',
  shadow: true,
})
export class UGroup {
  /**
   * direction of the group
   */
  @Prop() direction: 'row' | 'column' = 'row';

  render() {
    return (
      <div
        class={{
          [this.direction]: true,
        }}
      >
        <slot></slot>
      </div>
    );
  }
}
