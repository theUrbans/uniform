import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-row',
  styleUrl: 'w-row.css',
  shadow: true,
})
export class WRow {
  @Prop() align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @Prop() justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between' = 'start';
  render() {
    return (
      <Host
        class={{
          row: true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
