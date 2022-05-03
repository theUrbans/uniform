import { newE2EPage } from '@stencil/core/testing';

describe('u-floatingmenu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-floatingmenu></u-floatingmenu>');

    const element = await page.find('u-floatingmenu');
    expect(element).toHaveClass('hydrated');
  });
});
