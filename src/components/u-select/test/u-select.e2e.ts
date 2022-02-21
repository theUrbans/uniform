import { newE2EPage } from '@stencil/core/testing';

describe('w-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-select></u-select>');

    const element = await page.find('w-select');
    expect(element).toHaveClass('hydrated');
  });
});
