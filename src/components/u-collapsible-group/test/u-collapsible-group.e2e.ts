import { newE2EPage } from '@stencil/core/testing';

describe('u-collapsible-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-collapsible-group></u-collapsible-group>');

    const element = await page.find('u-collapsible-group');
    expect(element).toHaveClass('hydrated');
  });
});
