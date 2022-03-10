import { Component, h, Prop } from '@stencil/core';
export interface CellData {}
@Component({
  tag: 'u-tablecell',
  styleUrl: 'u-tablecell.css',
  shadow: true,
})
export class UTablecell {
  @Prop() checkbox: boolean = false;
  @Prop() data: CellData;
  render() {
    return <td>{this.checkbox && <u-checkbox></u-checkbox>}</td>;
  }
}
