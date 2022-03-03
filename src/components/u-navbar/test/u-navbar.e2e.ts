import { newE2EPage } from '@stencil/core/testing';

describe('u-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-navbar></u-navbar>');

    const element = await page.find('u-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
