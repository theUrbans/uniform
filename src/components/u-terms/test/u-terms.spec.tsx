import { newSpecPage } from '@stencil/core/testing';
import { UTerms } from '../u-terms';

describe('u-terms', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTerms],
      html: '<u-terms></u-terms>',
    });
    expect(page.root).toEqualHtml(`
      <u-terms>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-terms>
    `);
  });
});
