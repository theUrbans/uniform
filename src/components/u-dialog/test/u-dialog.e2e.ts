import { newE2EPage } from '@stencil/core/testing';

describe('u-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-dialog></u-dialog>');

    const element = await page.find('u-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
