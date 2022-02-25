import { newE2EPage } from '@stencil/core/testing';

describe('u-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-dropdown></u-dropdown>');

    const element = await page.find('u-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
