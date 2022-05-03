import { newE2EPage } from '@stencil/core/testing';

describe('u-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-col></u-col>');

    const element = await page.find('u-col');
    expect(element).toHaveClass('hydrated');
  });
});
