import { newSpecPage } from '@stencil/core/testing';
import { UNavbar } from '../u-navbar';

describe('u-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UNavbar],
      html: `<u-navbar></u-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <u-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-navbar>
    `);
  });
});
