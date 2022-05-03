import { newE2EPage } from '@stencil/core/testing';

describe('u-tablecell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-tablecell></u-tablecell>');

    const element = await page.find('u-tablecell');
    expect(element).toHaveClass('hydrated');
  });
});
