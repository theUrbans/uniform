import { newSpecPage } from '@stencil/core/testing';
import { UNotification } from '../u-notification';

describe('w-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UNotification],
      html: `<u-notification></u-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <u-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-notification>
    `);
  });
});
