import { newSpecPage } from '@stencil/core/testing';
import { WSelect } from '../w-select';

describe('w-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WSelect],
      html: `<w-select></w-select>`,
    });
    expect(page.root).toEqualHtml(`
      <w-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-select>
    `);
  });
});
