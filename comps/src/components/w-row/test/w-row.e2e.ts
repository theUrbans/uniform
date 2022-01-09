import { newE2EPage } from '@stencil/core/testing';

describe('w-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-row></w-row>');

    const element = await page.find('w-row');
    expect(element).toHaveClass('hydrated');
  });
});
