import { newE2EPage } from '@stencil/core/testing';

describe('u-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-input></u-input>');

    const element = await page.find('u-input');
    expect(element).toHaveClass('hydrated');
  });
});
