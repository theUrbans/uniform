import { newSpecPage } from '@stencil/core/testing';
import { WSpoiler } from '../w-spoiler';

describe('w-spoiler', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WSpoiler],
      html: `<u-spoiler></u-spoiler>`,
    });
    expect(page.root).toEqualHtml(`
      <u-spoiler>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-spoiler>
    `);
  });
});
