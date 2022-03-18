import { newSpecPage } from '@stencil/core/testing';
import { UDatepicker } from '../u-datepicker';

describe('u-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UDatepicker],
      html: '<u-datepicker></u-datepicker>'
    });
    expect(page.root).toEqualHtml(`
      <u-datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-datepicker>
    `);
  });
});
