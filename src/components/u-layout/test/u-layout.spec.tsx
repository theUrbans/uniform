import { newSpecPage } from '@stencil/core/testing';
import { ULayout } from '../u-layout';

describe('u-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ULayout],
      html: '<u-layout></u-layout>',
    });
    expect(page.root).toEqualHtml(`
      <u-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-layout>
    `);
  });
});
