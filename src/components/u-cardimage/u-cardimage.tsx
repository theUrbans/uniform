import { Component, h, Prop } from '@stencil/core';

/**
 * @name Cardimage
 * @state 🟡
 * @description Component to fill a card with a picture.
 */
@Component({
  tag: 'u-cardimage',
  styleUrl: 'u-cardimage.css',
  shadow: true,
})
export class UCardimage {
  /**
   * src: path of image source
   */
  @Prop() src: string;
  /**
   * height of picture: string, e.g. '400px'
   */
  @Prop() height: string;
  /**
   * width of picture: string, e.g. '400px'
   */
  @Prop() width: string;

  render() {
    return (
      <div>
        <img src={this.src} width={this.width} height={this.height} />
      </div>
    );
  }
}
