import { newE2EPage } from '@stencil/core/testing';

describe('w-cardselect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-cardselect></w-cardselect>');

    const element = await page.find('w-cardselect');
    expect(element).toHaveClass('hydrated');
  });
});
