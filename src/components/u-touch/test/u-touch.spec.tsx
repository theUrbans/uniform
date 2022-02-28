import { newSpecPage } from '@stencil/core/testing';
import { UTouch } from '../u-touch';

describe('u-touch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UTouch],
      html: `<u-touch></u-touch>`,
    });
    expect(page.root).toEqualHtml(`
      <u-touch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-touch>
    `);
  });
});
