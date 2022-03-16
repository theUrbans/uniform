import { newSpecPage } from '@stencil/core/testing';
import { UTablehead } from '../u-tablehead';

describe('u-tablehead', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTablehead],
      html: '<u-tablehead></u-tablehead>',
    });
    expect(page.root).toEqualHtml(`
      <u-tablehead>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tablehead>
    `);
  });
});
