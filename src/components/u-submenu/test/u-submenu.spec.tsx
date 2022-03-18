import { newSpecPage } from '@stencil/core/testing';
import { USubmenu } from '../u-submenu';

describe('u-submenu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [USubmenu],
      html: '<u-submenu></u-submenu>'
    });
    expect(page.root).toEqualHtml(`
      <u-submenu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-submenu>
    `);
  });
});
