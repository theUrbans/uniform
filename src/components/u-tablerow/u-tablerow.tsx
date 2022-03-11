import { Component, h } from '@stencil/core';
/**
 * @name Table Row
 * @state 🔴
 */
@Component({
  tag: 'u-tablerow',
  styleUrl: 'u-tablerow.css',
  shadow: true,
})
export class UTablerow {
  render() {
    return (
      <tr>
        <u-tablecell></u-tablecell>
      </tr>
    );
  }
}
