import { newE2EPage } from '@stencil/core/testing';

describe('w-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-dialog></u-dialog>');

    const element = await page.find('w-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
