import { Component, Prop, h } from '@stencil/core';

/**
 * @name Cardheader
 * @state 🟡
 * @description Component to use as a header of a card. Comes with function to overlap a picture in the cardbody.
 */
@Component({
  tag: 'u-cardheader',
  styleUrl: 'u-cardheader.css',
  shadow: true
})
export class UCardheader {
  /**
   * header overlaps the cardbody and will have see through background box
   */
  @Prop() overlap: boolean = false;

  render() {
    return (
      <div
        class={{
          overlap: this.overlap
        }}
      >
        <slot />
      </div>
    );
  }
}
