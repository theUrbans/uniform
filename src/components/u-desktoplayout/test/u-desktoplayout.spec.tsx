import { newSpecPage } from '@stencil/core/testing';
import { UDesktoplayout } from '../u-desktoplayout';

describe('u-desktoplayout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UDesktoplayout],
      html: '<u-desktoplayout></u-desktoplayout>',
    });
    expect(page.root).toEqualHtml(`
      <u-desktoplayout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-desktoplayout>
    `);
  });
});
