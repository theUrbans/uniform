import { newSpecPage } from '@stencil/core/testing';
import { WGroup } from '../w-group';

describe('w-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WGroup],
      html: `<w-group></w-group>`,
    });
    expect(page.root).toEqualHtml(`
      <w-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-group>
    `);
  });
});
