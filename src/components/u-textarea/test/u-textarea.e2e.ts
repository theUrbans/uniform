import { newE2EPage } from '@stencil/core/testing';

describe('u-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-textarea></u-textarea>');

    const element = await page.find('u-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
