import { newE2EPage } from '@stencil/core/testing';

describe('u-popup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-popup></u-popup>');

    const element = await page.find('u-popup');
    expect(element).toHaveClass('hydrated');
  });
});
