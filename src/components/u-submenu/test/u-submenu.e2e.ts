import { newE2EPage } from '@stencil/core/testing';

describe('u-submenu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-submenu></u-submenu>');

    const element = await page.find('u-submenu');
    expect(element).toHaveClass('hydrated');
  });
});
