import { newSpecPage } from '@stencil/core/testing';
import { WCardselect } from '../u-cardselect';

describe('w-cardselect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCardselect],
      html: `<u-cardselect></u-cardselect>`,
    });
    expect(page.root).toEqualHtml(`
      <u-cardselect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-cardselect>
    `);
  });
});
