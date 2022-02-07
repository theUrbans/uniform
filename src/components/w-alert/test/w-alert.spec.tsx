import { newSpecPage } from '@stencil/core/testing';
import { WAlert } from '../w-alert';

describe('w-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WAlert],
      html: `<w-alert></w-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <w-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-alert>
    `);
  });
});
