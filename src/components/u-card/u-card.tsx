import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'u-card',
  styleUrl: 'u-card.css',
  shadow: true,
})
export class UCard {
  /**
   * padding left and right: string, e.g. '1rem', '1px'
   */
  @Prop() slotCount?: number;
  @Prop() img?: string;

  render() {
    return (
      <div
        class={{
          card: true,
        }}
      >
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
       
        </div>
      </div>
    );
  }
}
