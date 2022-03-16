import { newSpecPage } from '@stencil/core/testing';
import { UFloatingbutton } from '../u-floatingbutton';

describe('u-floatingbutton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UFloatingbutton],
      html: '<u-floatingbutton></u-floatingbutton>',
    });
    expect(page.root).toEqualHtml(`
      <u-floatingbutton>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-floatingbutton>
    `);
  });
});
