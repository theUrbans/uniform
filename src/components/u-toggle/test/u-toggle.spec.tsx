import { newSpecPage } from '@stencil/core/testing';
import { UToggle } from '../u-toggle';

describe('w-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WToggle],
      html: `<u-toggle></u-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <u-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-toggle>
    `);
  });
});
