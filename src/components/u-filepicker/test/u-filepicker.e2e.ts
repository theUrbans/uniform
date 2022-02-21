import { newE2EPage } from '@stencil/core/testing';

describe('w-filepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-filepicker></u-filepicker>');

    const element = await page.find('w-filepicker');
    expect(element).toHaveClass('hydrated');
  });
});
