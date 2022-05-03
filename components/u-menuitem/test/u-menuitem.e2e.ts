import { newE2EPage } from '@stencil/core/testing';

describe('u-menuitem', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-menuitem></u-menuitem>');

    const element = await page.find('u-menuitem');
    expect(element).toHaveClass('hydrated');
  });
});
