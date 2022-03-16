import { newSpecPage } from '@stencil/core/testing';
import { UProgress } from '../u-progress';

describe('u-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UProgress],
      html: '<u-progress></u-progress>',
    });
    expect(page.root).toEqualHtml(`
      <u-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-progress>
    `);
  });
});
