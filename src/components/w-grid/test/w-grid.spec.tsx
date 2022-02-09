import { newSpecPage } from '@stencil/core/testing';
import { WGrid } from '../w-grid';

describe('w-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WGrid],
      html: `<w-grid></w-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <w-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-grid>
    `);
  });
});
