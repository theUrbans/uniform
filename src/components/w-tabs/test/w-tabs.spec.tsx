import { newSpecPage } from '@stencil/core/testing';
import { WTabs } from '../w-tabs';

describe('w-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WTabs],
      html: `<w-tabs></w-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <w-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-tabs>
    `);
  });
});
