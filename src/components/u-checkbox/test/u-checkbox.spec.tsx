import { newSpecPage } from '@stencil/core/testing';
import { WCheckbox } from '../w-checkbox';

describe('w-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCheckbox],
      html: `<u-checkbox></u-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <u-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-checkbox>
    `);
  });
});