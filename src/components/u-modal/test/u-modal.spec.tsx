import { newSpecPage } from '@stencil/core/testing';
import { UModal } from '../u-modal';

describe('w-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UModal],
      html: '<u-modal></u-modal>',
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
