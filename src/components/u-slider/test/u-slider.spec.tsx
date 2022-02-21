import { newSpecPage } from '@stencil/core/testing';
import { WSlider } from '../u-slider';

describe('w-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WSlider],
      html: `<u-slider></u-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <u-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-slider>
    `);
  });
});
