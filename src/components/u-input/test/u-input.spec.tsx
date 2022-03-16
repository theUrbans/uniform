import { newSpecPage } from '@stencil/core/testing';
import { UInput } from '../u-input';

describe('w-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UInput],
      html: '<u-input></u-input>',
    });
    expect(page.root).toEqualHtml(`
      <u-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-input>
    `);
  });
});
