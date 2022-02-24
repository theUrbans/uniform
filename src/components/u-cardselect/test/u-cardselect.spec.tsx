import { newSpecPage } from '@stencil/core/testing';
import { UCardselect } from '../u-cardselect';

describe('w-cardselect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCardselect],
      html: `<u-cardselect></u-cardselect>`,
    });
    expect(page.root).toEqualHtml(`
      <u-cardselect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-cardselect>
    `);
  });
});
