import { newSpecPage } from '@stencil/core/testing';
import { WCheckbox } from '../w-checkbox';

describe('w-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCheckbox],
      html: `<w-checkbox></w-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <w-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-checkbox>
    `);
  });
});
