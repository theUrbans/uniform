import { newSpecPage } from '@stencil/core/testing';
import { UTablegen } from '../u-tablegen';

describe('u-tablegen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTablegen],
      html: `<u-tablegen></u-tablegen>`
    });
    expect(page.root).toEqualHtml(`
      <u-tablegen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tablegen>
    `);
  });
});
