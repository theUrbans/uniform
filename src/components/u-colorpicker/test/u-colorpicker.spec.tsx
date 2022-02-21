import { newSpecPage } from '@stencil/core/testing';
import { UColorpicker } from '../u-colorpicker';

describe('u-colorpicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UColorpicker],
      html: `<u-colorpicker></u-colorpicker>`,
    });
    expect(page.root).toEqualHtml(`
      <u-colorpicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-colorpicker>
    `);
  });
});
