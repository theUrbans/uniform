import { newE2EPage } from '@stencil/core/testing';

describe('u-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tabs></u-tabs>');

    const element = await page.find('u-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
