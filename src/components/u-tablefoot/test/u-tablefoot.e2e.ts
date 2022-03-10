import { newE2EPage } from '@stencil/core/testing';

describe('u-tablefoot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tablefoot></u-tablefoot>');

    const element = await page.find('u-tablefoot');
    expect(element).toHaveClass('hydrated');
  });
});
