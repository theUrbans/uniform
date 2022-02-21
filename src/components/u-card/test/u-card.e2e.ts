import { newE2EPage } from '@stencil/core/testing';

describe('w-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-card></u-card>');

    const element = await page.find('w-card');
    expect(element).toHaveClass('hydrated');
  });
});
