import { newE2EPage } from '@stencil/core/testing';

describe('u-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tooltip></u-tooltip>');

    const element = await page.find('u-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
