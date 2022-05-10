import { newE2EPage } from '@stencil/core/testing';

describe('u-tabletlayout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tabletlayout></u-tabletlayout>');

    const element = await page.find('u-tabletlayout');
    expect(element).toHaveClass('hydrated');
  });
});
