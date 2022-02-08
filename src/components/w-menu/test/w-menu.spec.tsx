import { newSpecPage } from '@stencil/core/testing';
import { WMenu } from '../w-menu';

describe('w-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WMenu],
      html: `<w-menu></w-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <w-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-menu>
    `);
  });
});
