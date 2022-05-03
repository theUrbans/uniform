import { newE2EPage } from '@stencil/core/testing';

describe('u-monthpicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-monthpicker></u-monthpicker>');

    const element = await page.find('u-monthpicker');
    expect(element).toHaveClass('hydrated');
  });
});
