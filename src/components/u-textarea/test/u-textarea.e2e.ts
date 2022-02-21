import { newE2EPage } from '@stencil/core/testing';

describe('w-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-textarea></u-textarea>');

    const element = await page.find('w-textarea');
    expect(element).toHaveClass('hydrated');
  });
});