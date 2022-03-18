import { newSpecPage } from '@stencil/core/testing';
import { UDatetimepicker } from '../u-datetimepicker';

describe('u-datetimepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UDatetimepicker],
      html: '<u-datetimepicker></u-datetimepicker>'
    });
    expect(page.root).toEqualHtml(`
      <u-datetimepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-datetimepicker>
    `);
  });
});
