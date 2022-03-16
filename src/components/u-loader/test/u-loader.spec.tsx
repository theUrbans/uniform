import { newSpecPage } from '@stencil/core/testing';
import { ULoader } from '../u-loader';

describe('u-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ULoader],
      html: '<u-loader></u-loader>',
    });
    expect(page.root).toEqualHtml(`
      <u-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-loader>
    `);
  });
});
