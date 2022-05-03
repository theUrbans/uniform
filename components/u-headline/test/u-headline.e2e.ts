import { newE2EPage } from '@stencil/core/testing';

describe('u-headline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-headline></u-headline>');

    const element = await page.find('u-headline');
    expect(element).toHaveClass('hydrated');
  });
});
