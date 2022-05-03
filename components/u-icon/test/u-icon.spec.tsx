import { newSpecPage } from '@stencil/core/testing';
import { UIcon } from '../u-icon';

describe('w-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIcon],
      html: '<u-icon></u-icon>'
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
