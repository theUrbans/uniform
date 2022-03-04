import { newSpecPage } from '@stencil/core/testing';
import { UBreadcrumb } from '../u-breadcrumb';

describe('u-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UBreadcrumb],
      html: `<u-breadcrumb></u-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <u-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-breadcrumb>
    `);
  });
});
