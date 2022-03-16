import { newSpecPage } from '@stencil/core/testing';
import { UPopup } from '../u-popup';

describe('u-popup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UPopup],
      html: '<u-popup></u-popup>',
    });
    expect(page.root).toEqualHtml(`
      <u-popup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-popup>
    `);
  });
});
