import { newSpecPage } from '@stencil/core/testing';
import { UWeekpicker } from '../u-weekpicker';

describe('u-weekpicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UWeekpicker],
      html: '<u-weekpicker></u-weekpicker>'
    });
    expect(page.root).toEqualHtml(`
      <u-weekpicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-weekpicker>
    `);
  });
});
