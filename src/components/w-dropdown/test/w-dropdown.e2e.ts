import { newE2EPage } from '@stencil/core/testing';

describe('w-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-dropdown></w-dropdown>');

    const element = await page.find('w-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
