import { newE2EPage } from '@stencil/core/testing';

describe('w-radiogroup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-radiogroup></w-radiogroup>');

    const element = await page.find('w-radiogroup');
    expect(element).toHaveClass('hydrated');
  });
});
