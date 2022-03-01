import { newE2EPage } from '@stencil/core/testing';

describe('u-spoiler', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-spoiler></u-spoiler>');

    const element = await page.find('u-spoiler');
    expect(element).toHaveClass('hydrated');
  });
});
