import { newSpecPage } from '@stencil/core/testing';
import { UCardheader } from '../u-cardheader';

describe('u-cardheader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCardheader],
      html: `<u-cardheader></u-cardheader>`,
    });
    expect(page.root).toEqualHtml(`
      <u-cardheader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-cardheader>
    `);
  });
});
