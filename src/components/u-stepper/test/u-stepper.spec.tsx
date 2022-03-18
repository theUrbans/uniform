import { newSpecPage } from '@stencil/core/testing';
import { UStepper } from '../u-stepper';

describe('w-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UStepper],
      html: '<u-stepper></u-stepper>'
    });
    expect(page.root).toEqualHtml(`
      <u-stepper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-stepper>
    `);
  });
});
