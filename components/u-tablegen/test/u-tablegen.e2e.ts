import { newE2EPage } from '@stencil/core/testing';

describe('u-tablegen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tablegen></u-tablegen>');

    const element = await page.find('u-tablegen');
    expect(element).toHaveClass('hydrated');
  });
});
