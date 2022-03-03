import { newSpecPage } from '@stencil/core/testing';
import { UBarcodescanner } from '../u-barcodescanner';

describe('u-barcodescanner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UBarcodescanner],
      html: `<u-barcodescanner></u-barcodescanner>`,
    });
    expect(page.root).toEqualHtml(`
      <u-barcodescanner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-barcodescanner>
    `);
  });
});
