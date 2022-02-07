import { newE2EPage } from '@stencil/core/testing';

describe('w-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-notification></w-notification>');

    const element = await page.find('w-notification');
    expect(element).toHaveClass('hydrated');
  });
});
