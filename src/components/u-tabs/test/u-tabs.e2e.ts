import { newE2EPage } from '@stencil/core/testing';

describe('w-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tabs></u-tabs>');

    const element = await page.find('w-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
