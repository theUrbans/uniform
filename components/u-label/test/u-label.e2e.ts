import { newE2EPage } from '@stencil/core/testing';

describe('u-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-label></u-label>');

    const element = await page.find('u-label');
    expect(element).toHaveClass('hydrated');
  });
});
