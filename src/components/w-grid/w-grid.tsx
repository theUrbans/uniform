import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-grid',
  styleUrl: 'w-grid.css',
  shadow: true,
})
export class WGrid {
  @Prop() columns: number | Array<number> = 12;
  @Prop() rows: number | Array<number> = 2;
  render() {
    return (
      <Host class={{}}>
        <slot></slot>
      </Host>
    );
  }
}
