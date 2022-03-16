import { newSpecPage } from '@stencil/core/testing';
import { USelect } from '../u-select';

describe('w-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [USelect],
      html: '<u-select></u-select>',
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
