import { Component, h, Prop, Element } from '@stencil/core';

/**
 * @name Icon Wrapper
 * @state 🟡
 * @description Wrapper for icons (svg preferred)
 * @slot default - eg. svg or img
 */
@Component({
  tag: 'u-icon',
  styleUrl: 'u-icon.scss',
  scoped: true
})
export class UIcon {
  @Element() el: HTMLElement;

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
    'primary';

  /**
   * if true, svg color matches color with design
   */
  @Prop() udpateSvgColor: boolean = true;

  componentDidRender() {
    if (!this.udpateSvgColor) return;
    const icon = this.el.querySelector('svg') as SVGElement;
    const iconWrapper = this.el.querySelector('i') as HTMLElement;
    const { color } = getComputedStyle(iconWrapper);
    if (!icon) return;
    icon.style.fill = color;
  }

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
