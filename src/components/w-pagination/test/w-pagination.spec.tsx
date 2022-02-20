import { newSpecPage } from '@stencil/core/testing';
import { WPagination } from '../w-pagination';

describe('w-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WPagination],
      html: `<w-pagination></w-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <w-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-pagination>
    `);
  });
});
