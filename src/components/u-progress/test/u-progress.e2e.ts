import { newE2EPage } from '@stencil/core/testing';

describe('u-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-progress></u-progress>');

    const element = await page.find('u-progress');
    expect(element).toHaveClass('hydrated');
  });
});
