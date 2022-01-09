import { newSpecPage } from '@stencil/core/testing';
import { WRow } from '../w-row';

describe('w-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WRow],
      html: `<w-row></w-row>`,
    });
    expect(page.root).toEqualHtml(`
      <w-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-row>
    `);
  });
});
