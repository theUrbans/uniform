import { newSpecPage } from '@stencil/core/testing';
import { UFloatingmenu } from '../u-floatingmenu';

describe('u-floatingmenu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UFloatingmenu],
      html: `<u-floatingmenu></u-floatingmenu>`,
    });
    expect(page.root).toEqualHtml(`
      <u-floatingmenu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-floatingmenu>
    `);
  });
});
