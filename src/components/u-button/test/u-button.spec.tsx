import { newSpecPage } from '@stencil/core/testing';
import { UButton } from '../u-button';

describe('w-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UButton],
      html: '<u-button></u-button>'
    });
    expect(page.root).toEqualHtml(`
      <u-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-button>
    `);
  });
});
