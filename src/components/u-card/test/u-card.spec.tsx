import { newSpecPage } from '@stencil/core/testing';
import { UCard } from '../u-card';

describe('w-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WCard],
      html: `<u-card></u-card>`,
    });
    expect(page.root).toEqualHtml(`
      <u-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-card>
    `);
  });
});
