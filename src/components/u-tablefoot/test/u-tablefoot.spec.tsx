import { newSpecPage } from '@stencil/core/testing';
import { UTablefoot } from '../u-tablefoot';

describe('u-tablefoot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTablefoot],
      html: `<u-tablefoot></u-tablefoot>`,
    });
    expect(page.root).toEqualHtml(`
      <u-tablefoot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tablefoot>
    `);
  });
});
