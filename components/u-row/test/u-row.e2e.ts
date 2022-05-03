import { newE2EPage } from '@stencil/core/testing';

describe('u-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-row></u-row>');

    const element = await page.find('u-row');
    expect(element).toHaveClass('hydrated');
  });
});
