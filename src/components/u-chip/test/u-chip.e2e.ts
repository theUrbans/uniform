import { newE2EPage } from '@stencil/core/testing';

describe('u-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-chip></u-chip>');

    const element = await page.find('u-chip');
    expect(element).toHaveClass('hydrated');
  });
});
