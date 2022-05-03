import { Component, h, Prop } from '@stencil/core';
/**
 * @name Card
 * @state 🟡
 * @description Classic card component, usable with or without picture. Structured into header, body and footer. In the body can be added a picture.
 */
@Component({
  tag: 'u-card',
  styleUrl: 'u-card.css',
  shadow: true
})
export class UCard {
  /**
   * width of card: string, e.g. '12px', '20rem'. Default: '24rem'
   */
  @Prop() width: string = '24rem';

  /**
   * color of card: string, e.g. '#000', 'black'. Default: '#9EBADE' (lightblue)
   */
  @Prop() color: string = '#9EBADE';

  render() {
    return (
      <div
        class="card"
        style={{
          backgroundColor: this.color,
          width: this.width
        }}
      >
        <slot />
      </div>
    );
  }
}
