import { newE2EPage } from '@stencil/core/testing';

describe('u-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-button></u-button>');

    const element = await page.find('u-button');
    expect(element).toHaveClass('hydrated');
  });
});
