import { newE2EPage } from '@stencil/core/testing';

describe('u-cardfooter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-cardfooter></u-cardfooter>');

    const element = await page.find('u-cardfooter');
    expect(element).toHaveClass('hydrated');
  });
});
