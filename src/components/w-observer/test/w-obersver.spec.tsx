import { newSpecPage } from '@stencil/core/testing';
import { WObserver } from '../w-observer';

describe('w-observer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WObserver],
      html: `<w-observer></w-observer>`,
    });
    expect(page.root).toEqualHtml(`
      <w-observer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-observer>
    `);
  });
});
