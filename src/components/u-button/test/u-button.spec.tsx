import { newSpecPage } from '@stencil/core/testing';
import { WButton } from '../w-button';

describe('w-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WButton],
      html: `<u-button></u-button>`,
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
