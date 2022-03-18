import { newSpecPage } from '@stencil/core/testing';
import { URadiogroup } from '../u-radiogroup';

describe('w-radiogroup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [URadiogroup],
      html: '<u-radiogroup></u-radiogroup>'
    });
    expect(page.root).toEqualHtml(`
      <u-radiogroup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-radiogroup>
    `);
  });
});
