import { newE2EPage } from '@stencil/core/testing';

describe('w-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-alert></u-alert>');

    const element = await page.find('w-alert');
    expect(element).toHaveClass('hydrated');
  });
});
