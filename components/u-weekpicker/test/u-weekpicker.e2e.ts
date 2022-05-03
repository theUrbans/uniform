import { newE2EPage } from '@stencil/core/testing';

describe('u-weekpicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-weekpicker></u-weekpicker>');

    const element = await page.find('u-weekpicker');
    expect(element).toHaveClass('hydrated');
  });
});
