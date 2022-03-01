import { newSpecPage } from '@stencil/core/testing';
import { UObserver } from '../u-observer';

describe('w-observer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UObserver],
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
