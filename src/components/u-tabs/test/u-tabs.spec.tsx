import { newSpecPage } from '@stencil/core/testing';
import { WTabs } from '../u-tabs';

describe('w-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WTabs],
      html: `<u-tabs></u-tabs>`,
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
