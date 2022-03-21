import { newE2EPage } from '@stencil/core/testing';

describe('u-cardbody', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-cardbody></u-cardbody>');

    const element = await page.find('u-cardbody');
    expect(element).toHaveClass('hydrated');
  });
});
