import { newE2EPage } from '@stencil/core/testing';

describe('w-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-icon></w-icon>');

    const element = await page.find('w-icon');
    expect(element).toHaveClass('hydrated');
  });
});
