import { newSpecPage } from '@stencil/core/testing';
import { WDropdown } from '../w-dropdown';

describe('w-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WDropdown],
      html: `<w-dropdown></w-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <w-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-dropdown>
    `);
  });
});
