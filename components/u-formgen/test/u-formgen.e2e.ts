import { newE2EPage } from '@stencil/core/testing';

describe('u-formgen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-formgen></u-formgen>');

    const element = await page.find('u-formgen');
    expect(element).toHaveClass('hydrated');
  });
});
