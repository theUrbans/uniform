import { newE2EPage } from '@stencil/core/testing';

describe('u-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-grid></u-grid>');

    const element = await page.find('u-grid');
    expect(element).toHaveClass('hydrated');
  });
});
