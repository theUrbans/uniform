import { newE2EPage } from '@stencil/core/testing';

describe('u-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-form></u-form>');

    const element = await page.find('u-form');
    expect(element).toHaveClass('hydrated');
  });
});
