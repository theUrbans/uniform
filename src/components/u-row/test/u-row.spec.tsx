import { newSpecPage } from '@stencil/core/testing';
import { WRow } from '../w-row';

describe('w-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WRow],
      html: `<u-row></u-row>`,
    });
    expect(page.root).toEqualHtml(`
      <u-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-row>
    `);
  });
});
