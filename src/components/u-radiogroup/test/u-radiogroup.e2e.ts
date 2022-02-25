import { newE2EPage } from '@stencil/core/testing';

describe('u-radiogroup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-radiogroup></u-radiogroup>');

    const element = await page.find('u-radiogroup');
    expect(element).toHaveClass('hydrated');
  });
});
