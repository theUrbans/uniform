import { newE2EPage } from '@stencil/core/testing';

describe('u-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-modal></u-modal>');

    const element = await page.find('u-modal');
    expect(element).toHaveClass('hydrated');
  });
});
