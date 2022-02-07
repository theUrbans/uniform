import { newE2EPage } from '@stencil/core/testing';

describe('w-stepper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-stepper></w-stepper>');

    const element = await page.find('w-stepper');
    expect(element).toHaveClass('hydrated');
  });
});