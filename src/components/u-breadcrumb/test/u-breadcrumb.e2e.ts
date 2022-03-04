import { newE2EPage } from '@stencil/core/testing';

describe('u-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-breadcrumb></u-breadcrumb>');

    const element = await page.find('u-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
