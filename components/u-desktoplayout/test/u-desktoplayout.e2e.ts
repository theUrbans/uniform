import { newE2EPage } from '@stencil/core/testing';

describe('u-desktoplayout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-desktoplayout></u-desktoplayout>');

    const element = await page.find('u-desktoplayout');
    expect(element).toHaveClass('hydrated');
  });
});
