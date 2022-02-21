import { newSpecPage } from '@stencil/core/testing';
import { WIcon } from '../w-icon';

describe('w-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WIcon],
      html: `<u-icon></u-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <u-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-icon>
    `);
  });
});
