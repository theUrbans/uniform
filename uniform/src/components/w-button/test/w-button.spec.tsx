import { newSpecPage } from '@stencil/core/testing';
import { WButton } from '../w-button';

describe('w-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WButton],
      html: `<w-button></w-button>`,
    });
    expect(page.root).toEqualHtml(`
      <w-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-button>
    `);
  });
});
