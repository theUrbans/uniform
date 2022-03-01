import { newE2EPage } from '@stencil/core/testing';

describe('u-touch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-touch></u-touch>');

    const element = await page.find('u-touch');
    expect(element).toHaveClass('hydrated');
  });
});
