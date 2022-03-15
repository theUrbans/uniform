import { Component, h, Prop } from '@stencil/core';

/**
 * @name Headline
 * @state 🟡
 */
@Component({
  tag: 'u-headline',
  styleUrl: 'u-headline.css',
  shadow: true,
})
export class UHeadline {
  @Prop() level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  render() {
    return (
      <this.level>
        <slot>Headline</slot>
      </this.level>
    );
  }
}
