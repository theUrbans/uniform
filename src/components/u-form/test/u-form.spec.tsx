import { newSpecPage } from '@stencil/core/testing';
import { WForm } from '../w-form';

describe('w-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WForm],
      html: `<u-form></u-form>`,
    });
    expect(page.root).toEqualHtml(`
      <u-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-form>
    `);
  });
});
