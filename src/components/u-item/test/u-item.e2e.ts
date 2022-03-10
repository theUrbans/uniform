import { newE2EPage } from '@stencil/core/testing';

describe('u-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-item></u-item>');

    const element = await page.find('u-item');
    expect(element).toHaveClass('hydrated');
  });
});
