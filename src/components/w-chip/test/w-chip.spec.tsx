import { newSpecPage } from '@stencil/core/testing';
import { WChip } from '../w-chip';

describe('w-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WChip],
      html: `<w-chip></w-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <w-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-chip>
    `);
  });
});
