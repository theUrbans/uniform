import { newSpecPage } from '@stencil/core/testing';
import { UTablecell } from '../u-tablecell';

describe('u-tablecell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTablecell],
      html: '<u-tablecell></u-tablecell>'
    });
    expect(page.root).toEqualHtml(`
      <u-tablecell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tablecell>
    `);
  });
});
