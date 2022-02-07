import { newE2EPage } from '@stencil/core/testing';

describe('w-filepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-filepicker></w-filepicker>');

    const element = await page.find('w-filepicker');
    expect(element).toHaveClass('hydrated');
  });
});
