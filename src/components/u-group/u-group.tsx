import { Component, h, Prop } from '@stencil/core';

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
