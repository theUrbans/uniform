import { newE2EPage } from '@stencil/core/testing';

describe('u-barcodescanner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-barcodescanner></u-barcodescanner>');

    const element = await page.find('u-barcodescanner');
    expect(element).toHaveClass('hydrated');
  });
});
