import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @name Row
 * @state 🟢
 * @description flexbox row
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
  @Prop() align: 'start' | 'center' | 'end' | 'stretch' = 'center';

  /**
   * flex wrap
   */
  @Prop() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'wrap';

  /**
   * flex gap: string, e.g. '1rem', '1px'
   */
  @Prop() gap: string = '1rem';

  /**
   * padding left and right: string, e.g. '1rem', '1px'
   */
  @Prop() padding: string = '0';

  /**
   * flex width behaviour
   */
  @Prop() width: 'full' | 'content' | 'auto' = 'full';

  /**
   * should row be responsive?
   */
  @Prop() container?: boolean;

  /**
   * how many columns are in the row?
   */
  @Prop({ reflect: true }) gutter?: number;

  private setStyle() {
    if (this.container) {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat( ${this.gutter}, minmax(0, 1fr))`
      };
    }
    return {};
  }

  render() {
    return (
      <Host
        style={{
          ...this.setStyle(),
          // alignItems: this.align,
          // justifyContent: this.justify,
          // flexWrap: this.wrap,
          gap: this.gap,
          padding: `${this.padding}`
          // width:
          //   this.width === 'full'
          //     ? '100%'
          //     : this.width === 'content'
          //     ? 'fit-content'
          //     : 'auto',
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
