import { newSpecPage } from '@stencil/core/testing';
import { URow } from '../u-row';

describe('w-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [URow],
      html: '<u-row></u-row>',
    });
    expect(page.root).toEqualHtml(`
      <u-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-row>
    `);
  });
});
