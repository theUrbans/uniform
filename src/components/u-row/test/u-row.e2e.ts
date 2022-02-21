import { newE2EPage } from '@stencil/core/testing';

describe('w-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-row></u-row>');

    const element = await page.find('w-row');
    expect(element).toHaveClass('hydrated');
  });
});
