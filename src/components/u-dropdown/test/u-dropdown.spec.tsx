import { newSpecPage } from '@stencil/core/testing';
import { UDropdown } from '../u-dropdown';

describe('w-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UDropdown],
      html: `<u-dropdown></u-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <u-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-dropdown>
    `);
  });
});
