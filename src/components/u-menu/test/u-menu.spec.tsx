import { newSpecPage } from '@stencil/core/testing';
import { UMenu } from '../u-menu';

describe('w-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UMenu],
      html: '<u-menu></u-menu>',
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
