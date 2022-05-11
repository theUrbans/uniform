import { newSpecPage } from '@stencil/core/testing';
import { UListitem } from '../u-listitem';

describe('u-listitem', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UListitem],
      html: `<u-listitem></u-listitem>`
    });
    expect(page.root).toEqualHtml(`
      <u-listitem>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-listitem>
    `);
  });
});
