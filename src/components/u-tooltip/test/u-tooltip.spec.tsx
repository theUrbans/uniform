import { newSpecPage } from '@stencil/core/testing';
import { UTooltip } from '../u-tooltip';

describe('w-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTooltip],
      html: `<u-tooltip></u-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <u-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tooltip>
    `);
  });
});
