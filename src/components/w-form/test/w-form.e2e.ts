import { newE2EPage } from '@stencil/core/testing';

describe('w-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-form></w-form>');

    const element = await page.find('w-form');
    expect(element).toHaveClass('hydrated');
  });
});
