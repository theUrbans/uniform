import { newSpecPage } from '@stencil/core/testing';
import { WChip } from '../w-chip';

describe('w-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WChip],
      html: `<u-chip></u-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <u-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-chip>
    `);
  });
});
