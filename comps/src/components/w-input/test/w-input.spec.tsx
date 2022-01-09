import { newSpecPage } from '@stencil/core/testing';
import { WInput } from '../w-input';

describe('w-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WInput],
      html: `<w-input></w-input>`,
    });
    expect(page.root).toEqualHtml(`
      <w-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-input>
    `);
  });
});
