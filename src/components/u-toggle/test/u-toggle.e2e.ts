import { newE2EPage } from '@stencil/core/testing';

describe('w-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-toggle></u-toggle>');

    const element = await page.find('w-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
