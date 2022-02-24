import { newSpecPage } from '@stencil/core/testing';
import { UEditor } from '../u-editor';

describe('u-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UEditor],
      html: `<u-editor></u-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <u-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </u-editor>
    `);
  });
});
