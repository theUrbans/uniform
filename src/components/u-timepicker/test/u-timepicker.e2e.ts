import { newE2EPage } from '@stencil/core/testing';

describe('u-timepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-timepicker></u-timepicker>');

    const element = await page.find('u-timepicker');
    expect(element).toHaveClass('hydrated');
  });
});
