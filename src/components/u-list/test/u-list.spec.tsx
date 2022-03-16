import { newSpecPage } from '@stencil/core/testing';
import { UList } from '../u-list';

describe('u-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UList],
      html: '<u-list></u-list>',
    });
    expect(page.root).toEqualHtml(`
      <u-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-list>
    `);
  });
});
