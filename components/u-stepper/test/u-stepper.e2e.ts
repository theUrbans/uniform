import { newE2EPage } from '@stencil/core/testing';

describe('u-stepper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-stepper></u-stepper>');

    const element = await page.find('u-stepper');
    expect(element).toHaveClass('hydrated');
  });
});
