import { newE2EPage } from '@stencil/core/testing';

describe('w-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tooltip></u-tooltip>');

    const element = await page.find('w-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
