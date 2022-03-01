import { newE2EPage } from '@stencil/core/testing';

describe('u-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-menu></u-menu>');

    const element = await page.find('u-menu');
    expect(element).toHaveClass('hydrated');
  });
});
