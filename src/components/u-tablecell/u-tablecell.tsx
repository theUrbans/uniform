import { Component, h, Prop } from '@stencil/core';
export type ComponentName = 'Table Cell';
/**
 * @name Table Cell
 * @state 🔴
 */
@Component({
  tag: 'u-tablecell',
  styleUrl: 'u-tablecell.css',
  shadow: true,
})
export class UTablecell {
  /**
   * should checkbox be rendered
   */
  @Prop() checkbox: boolean = false;
  @Prop() data: string;
  render() {
    return (
      <td>
        {this.checkbox && <u-checkbox size="small"></u-checkbox>} {this.data}
      </td>
    );
  }
}
