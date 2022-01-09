import { newE2EPage } from '@stencil/core/testing';

describe('w-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-modal></w-modal>');

    const element = await page.find('w-modal');
    expect(element).toHaveClass('hydrated');
  });
});
