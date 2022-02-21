import { newE2EPage } from '@stencil/core/testing';

describe('w-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-group></u-group>');

    const element = await page.find('w-group');
    expect(element).toHaveClass('hydrated');
  });
});
