import { newSpecPage } from '@stencil/core/testing';
import { UCardfooter } from '../u-cardfooter';

describe('u-cardfooter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCardfooter],
      html: `<u-cardfooter></u-cardfooter>`
    });
    expect(page.root).toEqualHtml(`
      <u-cardfooter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-cardfooter>
    `);
  });
});
