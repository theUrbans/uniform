import { newE2EPage } from '@stencil/core/testing';

describe('u-cardselect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-cardselect></u-cardselect>');

    const element = await page.find('u-cardselect');
    expect(element).toHaveClass('hydrated');
  });
});
