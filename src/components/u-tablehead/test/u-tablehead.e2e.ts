import { newE2EPage } from '@stencil/core/testing';

describe('u-tablehead', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tablehead></u-tablehead>');

    const element = await page.find('u-tablehead');
    expect(element).toHaveClass('hydrated');
  });
});
