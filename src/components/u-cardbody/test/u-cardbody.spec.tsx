import { newSpecPage } from '@stencil/core/testing';
import { UCardbody } from '../u-cardbody';

describe('u-cardbody', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UCardbody],
      html: `<u-cardbody></u-cardbody>`
    });
    expect(page.root).toEqualHtml(`
      <u-cardbody>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-cardbody>
    `);
  });
});
