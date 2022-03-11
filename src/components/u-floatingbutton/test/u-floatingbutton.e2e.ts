import { newE2EPage } from '@stencil/core/testing';

describe('u-floatingbutton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-floatingbutton></u-floatingbutton>');

    const element = await page.find('u-floatingbutton');
    expect(element).toHaveClass('hydrated');
  });
});
