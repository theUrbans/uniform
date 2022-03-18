import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @name Headline
 * @state 🟡
 */
@Component({
  tag: 'u-headline',
  styleUrl: 'u-headline.css',
  scoped: true
})
export class UHeadline {
  /**
   * headline level which should be used
   */
  @Prop() level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

  render() {
    return (
      <Host>
        <this.level>
          <slot>Headline</slot>
        </this.level>
      </Host>
    );
  }
}
