import { newE2EPage } from '@stencil/core/testing';

describe('w-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-pagination></u-pagination>');

    const element = await page.find('w-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
