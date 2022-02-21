import { newE2EPage } from '@stencil/core/testing';

describe('u-tablerow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tablerow></u-tablerow>');

    const element = await page.find('u-tablerow');
    expect(element).toHaveClass('hydrated');
  });
});
