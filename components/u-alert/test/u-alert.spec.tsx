import { newSpecPage } from '@stencil/core/testing';
import { UAlert } from '../u-alert';

describe('w-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UAlert],
      html: '<u-alert></u-alert>'
    });
    expect(page.root).toEqualHtml(`
      <u-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-alert>
    `);
  });
});
