import { newSpecPage } from '@stencil/core/testing';
import { WFilepicker } from '../u-filepicker';

describe('w-filepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WFilepicker],
      html: `<u-filepicker></u-filepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <u-filepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-filepicker>
    `);
  });
});
