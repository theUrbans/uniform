import { newSpecPage } from '@stencil/core/testing';
import { WForm } from '../w-form';

describe('w-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WForm],
      html: `<w-form></w-form>`,
    });
    expect(page.root).toEqualHtml(`
      <w-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-form>
    `);
  });
});
