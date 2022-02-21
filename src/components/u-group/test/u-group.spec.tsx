import { newSpecPage } from '@stencil/core/testing';
import { WGroup } from '../u-group';

describe('w-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WGroup],
      html: `<u-group></u-group>`,
    });
    expect(page.root).toEqualHtml(`
      <u-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-group>
    `);
  });
});
