import { newSpecPage } from '@stencil/core/testing';
import { WCard } from '../w-card';

describe('w-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCard],
      html: `<w-card></w-card>`,
    });
    expect(page.root).toEqualHtml(`
      <w-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-card>
    `);
  });
});
