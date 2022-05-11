import { newSpecPage } from '@stencil/core/testing';
import { UTabletlayout } from '../u-tabletlayout';

describe('u-tabletlayout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTabletlayout],
      html: `<u-tabletlayout></u-tabletlayout>`
    });
    expect(page.root).toEqualHtml(`
      <u-tabletlayout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-tabletlayout>
    `);
  });
});
