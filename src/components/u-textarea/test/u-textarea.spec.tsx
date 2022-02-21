import { newSpecPage } from '@stencil/core/testing';
import { WTextarea } from '../w-textarea';

describe('w-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WTextarea],
      html: `<u-textarea></u-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <u-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-textarea>
    `);
  });
});
