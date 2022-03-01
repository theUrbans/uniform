import { newE2EPage } from '@stencil/core/testing';

describe('u-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-link></u-link>');

    const element = await page.find('u-link');
    expect(element).toHaveClass('hydrated');
  });
});
