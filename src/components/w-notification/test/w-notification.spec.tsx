import { newSpecPage } from '@stencil/core/testing';
import { WNotification } from '../w-notification';

describe('w-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WNotification],
      html: `<w-notification></w-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <w-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-notification>
    `);
  });
});
