import { Component, h, Prop } from '@stencil/core';

/**
 * @name Cardfooter
 * @state 🟡
 * @description Component to use as a footer of a card. Comes with function to overlap a picture in the cardbody and has a background-color, which is slighty see through.
 */
@Component({
  tag: 'u-cardfooter',
  styleUrl: 'u-cardfooter.css',
  shadow: true,
})
export class UCardfooter {
  /**
   * footer overlaps the cardbody and will have see through background box
   */
  @Prop() overlap: boolean = false;

  render() {
    return (
      <div class={{ overlap: this.overlap }}>
        <slot />
      </div>
    );
  }
}
