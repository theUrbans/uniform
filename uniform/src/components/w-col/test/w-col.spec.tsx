import { newSpecPage } from '@stencil/core/testing';
import { WCol } from '../w-col';

describe('w-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCol],
      html: `<w-col></w-col>`,
    });
    expect(page.root).toEqualHtml(`
      <w-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-col>
    `);
  });
});
