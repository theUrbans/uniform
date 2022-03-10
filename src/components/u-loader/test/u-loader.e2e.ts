import { newE2EPage } from '@stencil/core/testing';

describe('u-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-loader></u-loader>');

    const element = await page.find('u-loader');
    expect(element).toHaveClass('hydrated');
  });
});
