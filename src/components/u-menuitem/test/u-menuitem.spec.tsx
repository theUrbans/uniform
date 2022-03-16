import { newSpecPage } from '@stencil/core/testing';
import { UMenuitem } from '../u-menuitem';

describe('u-menuitem', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UMenuitem],
      html: '<u-menuitem></u-menuitem>',
    });
    expect(page.root).toEqualHtml(`
      <u-menuitem>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-menuitem>
    `);
  });
});
