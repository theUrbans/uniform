import { newSpecPage } from '@stencil/core/testing';
import { WCardselect } from '../w-cardselect';

describe('w-cardselect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCardselect],
      html: `<w-cardselect></w-cardselect>`,
    });
    expect(page.root).toEqualHtml(`
      <w-cardselect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-cardselect>
    `);
  });
});
