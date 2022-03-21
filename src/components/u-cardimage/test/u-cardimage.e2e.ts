import { newE2EPage } from '@stencil/core/testing';

describe('u-cardimage', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-cardimage></u-cardimage>');

    const element = await page.find('u-cardimage');
    expect(element).toHaveClass('hydrated');
  });
});
