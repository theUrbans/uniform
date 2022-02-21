import { newSpecPage } from '@stencil/core/testing';
import { WObserver } from '../w-observer';

describe('w-observer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WObserver],
      html: `<u-observer></u-observer>`,
    });
    expect(page.root).toEqualHtml(`
      <u-observer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-observer>
    `);
  });
});
