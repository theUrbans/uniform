import { newSpecPage } from '@stencil/core/testing';
import { WSlider } from '../w-slider';

describe('w-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WSlider],
      html: `<w-slider></w-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <w-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-slider>
    `);
  });
});
