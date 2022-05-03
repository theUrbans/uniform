import { newE2EPage } from '@stencil/core/testing';

describe('u-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-slider></u-slider>');

    const element = await page.find('u-slider');
    expect(element).toHaveClass('hydrated');
  });
});
