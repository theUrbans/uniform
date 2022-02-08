import { newE2EPage } from '@stencil/core/testing';

describe('w-observer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-observer></w-observer>');

    const element = await page.find('w-observer');
    expect(element).toHaveClass('hydrated');
  });
});
