import { newE2EPage } from '@stencil/core/testing';

describe('u-terms', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-terms></u-terms>');

    const element = await page.find('u-terms');
    expect(element).toHaveClass('hydrated');
  });
});
