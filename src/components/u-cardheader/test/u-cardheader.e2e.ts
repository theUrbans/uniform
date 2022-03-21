import { newE2EPage } from '@stencil/core/testing';

describe('u-cardheader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-cardheader></u-cardheader>');

    const element = await page.find('u-cardheader');
    expect(element).toHaveClass('hydrated');
  });
});
