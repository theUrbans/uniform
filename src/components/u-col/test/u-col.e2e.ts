import { newE2EPage } from '@stencil/core/testing';

describe('w-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-col></u-col>');

    const element = await page.find('w-col');
    expect(element).toHaveClass('hydrated');
  });
});
