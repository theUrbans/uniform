import { newE2EPage } from '@stencil/core/testing';

describe('u-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-toggle></u-toggle>');

    const element = await page.find('u-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
