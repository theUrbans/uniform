import { newE2EPage } from '@stencil/core/testing';

describe('u-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-table></u-table>');

    const element = await page.find('u-table');
    expect(element).toHaveClass('hydrated');
  });
});
