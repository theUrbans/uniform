import { Component, h, Prop } from '@stencil/core';

/**
 * @name Icon Wrapper
 * @state 🟡
 * @description Wrapper for icons (svg preferred)
 * @slot default - eg. svg or img
 */
@Component({
  tag: 'u-icon',
  styleUrl: 'u-icon.css',
  scoped: true
})
export class UIcon {
  /**
   * border style of the icon wrapper
   */
  @Prop() borderRadius: 'rounded' | 'square' | 'circle' = 'rounded';

  /**
   * if true hide the border and background color of the wrapper
   */
  @Prop() flat: boolean = false;

  /**
   * if true hide the background color of the wrapper
   */
  @Prop() outline: boolean = false;

  /**
   * select the design of the icon wrapper
   */
  @Prop() design: 'error' | 'success' | 'warning' | 'primary' | 'secondary' =
    'error';

  render() {
    return (
      <i
        class={{
          [this.design]: true,
          [`fill-${this.design}`]: !this.outline && !this.flat,
          outline: this.outline,
          flat: this.flat,
          [this.borderRadius]: true
        }}
      >
        <slot></slot>
      </i>
    );
  }
}
