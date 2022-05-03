import { newE2EPage } from '@stencil/core/testing';

describe('u-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-group></u-group>');

    const element = await page.find('u-group');
    expect(element).toHaveClass('hydrated');
  });
});
