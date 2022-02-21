import { newSpecPage } from '@stencil/core/testing';
import { WModal } from '../w-modal';

describe('w-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WModal],
      html: `<u-modal></u-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <u-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-modal>
    `);
  });
});
