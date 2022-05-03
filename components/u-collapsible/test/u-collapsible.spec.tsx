import { newSpecPage } from '@stencil/core/testing';
import { UCollapsible } from '../u-collapsible';

describe('u-collapsible', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCollapsible],
      html: `<u-collapsible></u-collapsible>`
    });
    expect(page.root).toEqualHtml(`
      <u-collapsible>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-collapsible>
    `);
  });
});
