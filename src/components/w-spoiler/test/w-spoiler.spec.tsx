import { newSpecPage } from '@stencil/core/testing';
import { WSpoiler } from '../w-spoiler';

describe('w-spoiler', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WSpoiler],
      html: `<w-spoiler></w-spoiler>`,
    });
    expect(page.root).toEqualHtml(`
      <w-spoiler>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-spoiler>
    `);
  });
});
