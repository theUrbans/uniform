import { Component, h, Prop } from '@stencil/core';

/**
 * @name Row
 * @state 🟢
 * @description flexbox row
 */
@Component({
  tag: 'u-row',
  styleUrl: 'u-row.css',
  shadow: true,
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
  @Prop() padding: string = '1rem';

  render() {
    return (
      <div
        class="row"
        style={{
          alignItems: this.align,
          justifyContent: this.justify,
          flexWrap: this.wrap,
          gap: this.gap,
          padding: `0 ${this.padding}`,
        }}
      >
        <slot></slot>
      </div>
    );
  }
}
