import { newE2EPage } from '@stencil/core/testing';

describe('u-filepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-filepicker></u-filepicker>');

    const element = await page.find('u-filepicker');
    expect(element).toHaveClass('hydrated');
  });
});
