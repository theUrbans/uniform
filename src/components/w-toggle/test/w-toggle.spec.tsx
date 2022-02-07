import { newSpecPage } from '@stencil/core/testing';
import { WToggle } from '../w-toggle';

describe('w-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WToggle],
      html: `<w-toggle></w-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <w-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-toggle>
    `);
  });
});
