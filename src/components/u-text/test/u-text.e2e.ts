import { newE2EPage } from '@stencil/core/testing';

describe('u-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-text></u-text>');

    const element = await page.find('u-text');
    expect(element).toHaveClass('hydrated');
  });
});
