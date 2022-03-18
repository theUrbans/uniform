import { newSpecPage } from '@stencil/core/testing';
import { UTable } from '../u-table';

describe('u-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTable],
      html: '<u-table></u-table>'
    });
    expect(page.root).toEqualHtml(`
      <u-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-table>
    `);
  });
});
