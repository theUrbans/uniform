import { newSpecPage } from '@stencil/core/testing';
import { ULink } from '../u-link';

describe('u-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ULink],
      html: `<u-link></u-link>`,
    });
    expect(page.root).toEqualHtml(`
      <u-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-link>
    `);
  });
});
