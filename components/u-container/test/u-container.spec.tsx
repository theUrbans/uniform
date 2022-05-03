import { newSpecPage } from '@stencil/core/testing';
import { UContainer } from '../u-container';

describe('u-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UContainer],
      html: `<u-container></u-container>`
    });
    expect(page.root).toEqualHtml(`
      <u-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-container>
    `);
  });
});
