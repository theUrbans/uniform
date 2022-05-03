import { newE2EPage } from '@stencil/core/testing';

describe('u-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-card></u-card>');

    const element = await page.find('u-card');
    expect(element).toHaveClass('hydrated');
  });
});
