import { newSpecPage } from '@stencil/core/testing';
import { UTablerow } from '../u-tablerow';

describe('u-tablerow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTablerow],
      html: '<u-tablerow></u-tablerow>',
    });
    expect(page.root).toEqualHtml(`
      <u-tablerow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tablerow>
    `);
  });
});
