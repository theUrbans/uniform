import { newSpecPage } from '@stencil/core/testing';
import { UGroup } from '../u-group';

describe('w-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UGroup],
      html: '<u-group></u-group>'
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
