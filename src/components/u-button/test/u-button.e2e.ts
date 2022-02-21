import { newE2EPage } from '@stencil/core/testing';

describe('w-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-button></u-button>');

    const element = await page.find('w-button');
    expect(element).toHaveClass('hydrated');
  });
});
