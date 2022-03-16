import { newSpecPage } from '@stencil/core/testing';
import { UGrid } from '../u-grid';

describe('w-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UGrid],
      html: '<u-grid></u-grid>',
    });
    expect(page.root).toEqualHtml(`
      <u-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-grid>
    `);
  });
});
