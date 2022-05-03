import { newSpecPage } from '@stencil/core/testing';
import { ULabel } from '../u-label';

describe('u-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ULabel],
      html: '<u-label></u-label>'
    });
    expect(page.root).toEqualHtml(`
      <u-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-label>
    `);
  });
});
