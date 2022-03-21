import { newSpecPage } from '@stencil/core/testing';
import { UCollapsibleGroup } from '../u-collapsible-group';

describe('u-collapsible-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCollapsibleGroup],
      html: `<u-collapsible-group></u-collapsible-group>`
    });
    expect(page.root).toEqualHtml(`
      <u-collapsible-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-collapsible-group>
    `);
  });
});
