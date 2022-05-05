import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @name Row
 * @state 🟢
 * @description Responsive flexbox/grid row
 * @categorie Layout
 */
@Component({
  tag: 'u-row',
  styleUrl: 'u-row.css',
  scoped: true
})
export class URow {
  /**
   * flex justify-content
   */
  @Prop() justify:
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly' = 'start';

  /**
   * flex align-items
   */
  @Prop() align?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * flex wrap
   */
  @Prop() wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  @Prop() gap?: string;

  /**
   * padding left and right: string, e.g. '1rem', '1px'
   */
  @Prop() padding?: string;

  /**
   * flex width behaviour
   */
  @Prop() width?: 'full' | 'content' | 'auto';

  /**
   * should row be responsive?
   */
  @Prop() container?: boolean;

  /**
   * how many columns are in the row?
   */
  @Prop({ reflect: true }) gutter?: number;

  private setStyle() {
    const style: any = {};
    if (this.container) {
      style.display = 'grid';
      style.gridTemplateColumns = `repeat(${this.gutter}, minmax(0, 1fr))`;
    }
    if (!this.container) style.display = 'flex';
    if (this.justify) style.justifyContent = this.justify;
    if (this.align) style.alignItems = this.align;
    if (this.wrap) style.flexWrap = this.wrap;
    if (this.gap) style.gridGap = this.gap;
    style.width =
      this.width === 'full'
        ? '100%'
        : this.width === 'content'
        ? 'fit-content'
        : 'auto';
    return style;
  }

  render() {
    return (
      <Host
        style={{
          ...this.setStyle()
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
