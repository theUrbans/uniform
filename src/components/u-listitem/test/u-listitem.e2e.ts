import { newE2EPage } from '@stencil/core/testing';

describe('u-listitem', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-listitem></u-listitem>');

    const element = await page.find('u-listitem');
    expect(element).toHaveClass('hydrated');
  });
});
