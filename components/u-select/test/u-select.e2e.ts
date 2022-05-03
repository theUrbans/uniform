import { newE2EPage } from '@stencil/core/testing';

describe('u-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-select></u-select>');

    const element = await page.find('u-select');
    expect(element).toHaveClass('hydrated');
  });
});
