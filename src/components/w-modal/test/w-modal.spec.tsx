import { newSpecPage } from '@stencil/core/testing';
import { WModal } from '../w-modal';

describe('w-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WModal],
      html: `<w-modal></w-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <w-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-modal>
    `);
  });
});
