import { newSpecPage } from '@stencil/core/testing';
import { WSelect } from '../w-select';

describe('w-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WSelect],
      html: `<u-select></u-select>`,
    });
    expect(page.root).toEqualHtml(`
      <u-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-select>
    `);
  });
});
