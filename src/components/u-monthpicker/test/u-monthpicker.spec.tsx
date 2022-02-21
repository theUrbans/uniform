import { newSpecPage } from '@stencil/core/testing';
import { UMonthpicker } from '../u-monthpicker';

describe('u-monthpicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UMonthpicker],
      html: `<u-monthpicker></u-monthpicker>`,
    });
    expect(page.root).toEqualHtml(`
      <u-monthpicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-monthpicker>
    `);
  });
});
