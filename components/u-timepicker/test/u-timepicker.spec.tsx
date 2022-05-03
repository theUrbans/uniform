import { newSpecPage } from '@stencil/core/testing';
import { UTimepicker } from '../u-timepicker';

describe('u-timepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTimepicker],
      html: '<u-timepicker></u-timepicker>'
    });
    expect(page.root).toEqualHtml(`
      <u-timepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-timepicker>
    `);
  });
});
