import { newSpecPage } from '@stencil/core/testing';
import { WInput } from '../w-input';

describe('w-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WInput],
      html: `<u-input></u-input>`,
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
