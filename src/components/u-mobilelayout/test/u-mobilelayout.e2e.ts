import { newE2EPage } from '@stencil/core/testing';

describe('u-mobilelayout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-mobilelayout></u-mobilelayout>');

    const element = await page.find('u-mobilelayout');
    expect(element).toHaveClass('hydrated');
  });
});
