import { newSpecPage } from '@stencil/core/testing';
import { UItem } from '../u-item';

describe('u-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UItem],
      html: '<u-item></u-item>',
    });
    expect(page.root).toEqualHtml(`
      <u-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-item>
    `);
  });
});
