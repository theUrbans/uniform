import { newE2EPage } from '@stencil/core/testing';

describe('w-radiogroup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-radiogroup></u-radiogroup>');

    const element = await page.find('w-radiogroup');
    expect(element).toHaveClass('hydrated');
  });
});
