import { newSpecPage } from '@stencil/core/testing';
import { UBreadcrumbs } from '../u-breadcrumbs';

describe('u-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UBreadcrumbs],
      html: `<u-breadcrumbs></u-breadcrumbs>`
    });
    expect(page.root).toEqualHtml(`
      <u-breadcrumbs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-breadcrumbs>
    `);
  });
});
