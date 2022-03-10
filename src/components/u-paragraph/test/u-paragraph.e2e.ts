import { newE2EPage } from '@stencil/core/testing';

describe('u-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<u-paragraph></u-paragraph>');

    const element = await page.find('u-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
