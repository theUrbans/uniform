import { newE2EPage } from '@stencil/core/testing';

describe('w-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-button></w-button>');

    const element = await page.find('w-button');
    expect(element).toHaveClass('hydrated');
  });
});
