import { Component, h, Prop } from '@stencil/core';

/**
 * @name Text
 * @state 🟡
 * @description Text component to style fast. No added padding or margin.
 */
@Component({
  tag: 'u-text',
  styleUrl: 'u-text.css',
  shadow: true,
})
export class UText {
  /**
   * font size: string, e.g. '12px', '1rem'. Default is '1rem'.
   */
  @Prop() size: string = '1rem';
  /**
   * font weight: string, e.g. 'bold'. Default is 'normal'.
   */
  @Prop() weight: string = 'normal';
  /**
   * text-transfrom: string, e.g. 'uppercase', 'lowercase'.
   */
  @Prop() transform: string;
  /**
   * font color: string, e.g. '#e1e1e1', 'lightblue'. Default is '#fff' (white).
   */
  @Prop() color: string = '#fff';

  render() {
    return (
      <span
        style={{
          fontSize: this.size,
          fontWeight: this.weight,
          color: this.color,
          textTransform: this.transform,
        }}
      >
        <slot />
      </span>
    );
  }
}
