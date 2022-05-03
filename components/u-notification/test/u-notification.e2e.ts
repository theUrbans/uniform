import { newE2EPage } from '@stencil/core/testing';

describe('u-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-notification></u-notification>');

    const element = await page.find('u-notification');
    expect(element).toHaveClass('hydrated');
  });
});
