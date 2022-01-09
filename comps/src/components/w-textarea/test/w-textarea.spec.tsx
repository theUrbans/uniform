import { newSpecPage } from '@stencil/core/testing';
import { WTextarea } from '../w-textarea';

describe('w-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WTextarea],
      html: `<w-textarea></w-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <w-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-textarea>
    `);
  });
});
