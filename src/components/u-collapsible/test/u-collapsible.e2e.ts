import { newE2EPage } from '@stencil/core/testing';

describe('u-collapsible', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-collapsible></u-collapsible>');

    const element = await page.find('u-collapsible');
    expect(element).toHaveClass('hydrated');
  });
});
