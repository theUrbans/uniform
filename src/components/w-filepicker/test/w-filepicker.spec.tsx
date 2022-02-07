import { newSpecPage } from '@stencil/core/testing';
import { WFilepicker } from '../w-filepicker';

describe('w-filepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WFilepicker],
      html: `<w-filepicker></w-filepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <w-filepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-filepicker>
    `);
  });
});
