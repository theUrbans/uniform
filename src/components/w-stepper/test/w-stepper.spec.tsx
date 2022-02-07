import { newSpecPage } from '@stencil/core/testing';
import { WStepper } from '../w-stepper';

describe('w-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WStepper],
      html: `<w-stepper></w-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <w-stepper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-stepper>
    `);
  });
});
