import { newSpecPage } from '@stencil/core/testing';
import { UParagraph } from '../u-paragraph';

describe('u-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UParagraph],
      html: '<u-paragraph></u-paragraph>',
    });
    expect(page.root).toEqualHtml(`
      <u-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-paragraph>
    `);
  });
});
