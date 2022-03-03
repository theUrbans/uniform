import { newSpecPage } from '@stencil/core/testing';
import { UMobilelayout } from '../u-mobilelayout';

describe('u-mobilelayout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UMobilelayout],
      html: `<u-mobilelayout></u-mobilelayout>`,
    });
    expect(page.root).toEqualHtml(`
      <u-mobilelayout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-mobilelayout>
    `);
  });
});
