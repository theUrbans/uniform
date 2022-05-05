import { newE2EPage } from '@stencil/core/testing';

describe('u-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-breadcrumbs></u-breadcrumbs>');

    const element = await page.find('u-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
