import { newSpecPage } from '@stencil/core/testing';
import { UHeadline } from '../u-headline';

describe('u-headline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UHeadline],
      html: '<u-headline></u-headline>'
    });
    expect(page.root).toEqualHtml(`
      <u-headline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-headline>
    `);
  });
});
