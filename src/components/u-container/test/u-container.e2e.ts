import { newE2EPage } from '@stencil/core/testing';

describe('u-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-container></u-container>');

    const element = await page.find('u-container');
    expect(element).toHaveClass('hydrated');
  });
});
