import { newE2EPage } from '@stencil/core/testing';

describe('w-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-input></u-input>');

    const element = await page.find('w-input');
    expect(element).toHaveClass('hydrated');
  });
});
