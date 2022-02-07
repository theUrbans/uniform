import { newSpecPage } from '@stencil/core/testing';
import { WTooltip } from '../w-tooltip';

describe('w-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WTooltip],
      html: `<w-tooltip></w-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <w-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-tooltip>
    `);
  });
});
