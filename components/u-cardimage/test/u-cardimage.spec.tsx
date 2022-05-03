import { newSpecPage } from '@stencil/core/testing';
import { UCardimage } from '../u-cardimage';

describe('u-cardimage', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCardimage],
      html: `<u-cardimage></u-cardimage>`
    });
    expect(page.root).toEqualHtml(`
      <u-cardimage>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-cardimage>
    `);
  });
});
