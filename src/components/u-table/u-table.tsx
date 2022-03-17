import { Component, h, Prop } from '@stencil/core';

/**
 * @name Table
 */
@Component({
  tag: 'u-table',
  styleUrl: 'u-table.css',
  shadow: true
})
export class UTable {
  /**
   * control border-collapse style
   */
  @Prop() borderStyle: 'seperate' | 'collapse' = 'collapse';

  /**
   * control border-spacing styöe
   */
  @Prop() borderSpacing: string = '0';

  render() {
    return (
      <table
        style={{
          borderCollapse: this.borderStyle,
          borderSpacing: this.borderSpacing
        }}
      ></table>
    );
  }
}
