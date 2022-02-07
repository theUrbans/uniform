import { newSpecPage } from '@stencil/core/testing';
import { WRadiogroup } from '../w-radiogroup';

describe('w-radiogroup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WRadiogroup],
      html: `<w-radiogroup></w-radiogroup>`,
    });
    expect(page.root).toEqualHtml(`
      <w-radiogroup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-radiogroup>
    `);
  });
});
