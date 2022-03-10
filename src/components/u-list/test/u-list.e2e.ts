import { newE2EPage } from '@stencil/core/testing';

describe('u-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-list></u-list>');

    const element = await page.find('u-list');
    expect(element).toHaveClass('hydrated');
  });
});
