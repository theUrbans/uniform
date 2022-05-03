import { newSpecPage } from '@stencil/core/testing';
import { UText } from '../u-text';

describe('u-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UText],
      html: `<u-text></u-text>`
    });
    expect(page.root).toEqualHtml(`
      <u-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-text>
    `);
  });
});
