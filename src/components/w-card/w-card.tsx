import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-card',
  styleUrl: 'w-card.css',
  shadow: true,
})
export class WCard {
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
          <img src={this.img} />
          <slot name="header"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
          {/* {Array[this.slotCount].map(slotNumber => (
            <slot name={slotNumber} />
          ))} */}
        </div>
      </div>
    );
  }
}
