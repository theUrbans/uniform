import { newSpecPage } from '@stencil/core/testing';
import { WCol } from '../w-col';

describe('w-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCol],
      html: `<u-col></u-col>`,
    });
    expect(page.root).toEqualHtml(`
      <u-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-col>
    `);
  });
});
