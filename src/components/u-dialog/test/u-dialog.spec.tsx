import { newSpecPage } from '@stencil/core/testing';
import { UDialog } from '../u-dialog';

describe('w-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UDialog],
      html: `<u-dialog></u-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <u-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-dialog>
    `);
  });
});
