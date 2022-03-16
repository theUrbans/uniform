import { newSpecPage } from '@stencil/core/testing';
import { USpoiler } from '../u-spoiler';

describe('w-spoiler', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [USpoiler],
      html: '<u-spoiler></u-spoiler>',
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
