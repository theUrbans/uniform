import { newE2EPage } from '@stencil/core/testing';

describe('u-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-layout></u-layout>');

    const element = await page.find('u-layout');
    expect(element).toHaveClass('hydrated');
  });
});
