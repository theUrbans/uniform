import { newE2EPage } from '@stencil/core/testing';

describe('u-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-pagination></u-pagination>');

    const element = await page.find('u-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
