import { newSpecPage } from '@stencil/core/testing';
import { WMenu } from '../u-menu';

describe('w-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WMenu],
      html: `<u-menu></u-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <u-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-menu>
    `);
  });
});
