import { newE2EPage } from '@stencil/core/testing';

describe('u-datetimepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-datetimepicker></u-datetimepicker>');

    const element = await page.find('u-datetimepicker');
    expect(element).toHaveClass('hydrated');
  });
});
