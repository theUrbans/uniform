import { newE2EPage } from '@stencil/core/testing';

describe('u-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-editor></u-editor>');

    const element = await page.find('u-editor');
    expect(element).toHaveClass('hydrated');
  });
});
