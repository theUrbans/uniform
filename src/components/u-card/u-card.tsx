import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'u-card',
  styleUrl: 'u-card.css',
  shadow: true,
})
export class UCard {
  @Prop() width: string = '24rem';
  @Prop() img: boolean = false;
  @Prop() color: string = '#9EBADE';

  render() {
    return (
      <div
        class={{
          card: true,
        }}
        style={{ 'background-color': this.color, 'width': this.width }}
      >
        <div
          class={{
            header: true,
            noImage: !this.img,
          }}
        >
          <slot name="header"></slot>
        </div>
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
    );
  }
}
