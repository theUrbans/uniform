import { newE2EPage } from '@stencil/core/testing';

describe('u-colorpicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-colorpicker></u-colorpicker>');

    const element = await page.find('u-colorpicker');
    expect(element).toHaveClass('hydrated');
  });
});
