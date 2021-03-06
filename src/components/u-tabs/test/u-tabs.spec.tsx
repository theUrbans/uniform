import { newSpecPage } from '@stencil/core/testing';
import { UTabs } from '../u-tabs';

describe('w-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTabs],
      html: '<u-tabs></u-tabs>'
    });
    expect(page.root).toEqualHtml(`
      <u-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tabs>
    `);
  });
});
