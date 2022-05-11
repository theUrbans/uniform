import { Component, h, Prop } from '@stencil/core';

/**
 * @name Table Cell
 */
@Component({
  tag: 'u-tablecell',
  styleUrl: 'u-tablecell.css',
  shadow: true
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
