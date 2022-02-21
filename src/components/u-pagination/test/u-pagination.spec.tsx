import { newSpecPage } from '@stencil/core/testing';
import { UPagination } from '../u-pagination';

describe('w-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WPagination],
      html: `<u-pagination></u-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <u-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-pagination>
    `);
  });
});
