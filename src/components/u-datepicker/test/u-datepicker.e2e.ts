import { newE2EPage } from '@stencil/core/testing';

describe('u-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-datepicker></u-datepicker>');

    const element = await page.find('u-datepicker');
    expect(element).toHaveClass('hydrated');
  });
});
