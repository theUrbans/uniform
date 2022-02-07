import { newE2EPage } from '@stencil/core/testing';

describe('w-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-dialog></w-dialog>');

    const element = await page.find('w-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
