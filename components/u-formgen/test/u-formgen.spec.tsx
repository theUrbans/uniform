import { newSpecPage } from '@stencil/core/testing';
import { UFormgen } from '../u-formgen';

describe('u-formgen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UFormgen],
      html: `<u-formgen></u-formgen>`
    });
    expect(page.root).toEqualHtml(`
      <u-formgen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-formgen>
    `);
  });
});
