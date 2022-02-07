import { newE2EPage } from '@stencil/core/testing';

describe('w-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-checkbox></w-checkbox>');

    const element = await page.find('w-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
