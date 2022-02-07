import { newSpecPage } from '@stencil/core/testing';
import { WDialog } from '../w-dialog';

describe('w-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WDialog],
      html: `<w-dialog></w-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <w-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-dialog>
    `);
  });
});
