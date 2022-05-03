import { newE2EPage } from '@stencil/core/testing';

describe('u-observer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-observer></u-observer>');

    const element = await page.find('u-observer');
    expect(element).toHaveClass('hydrated');
  });
});
