import { newSpecPage } from '@stencil/core/testing';
import { WIcon } from '../w-icon';

describe('w-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WIcon],
      html: `<w-icon></w-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <w-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-icon>
    `);
  });
});
