import { test, expect } from '@playwright/test';

test('Verify Client Work page visibility', async ({ page }) => {
  await test.step('Navigate to EPAM homepage', async () => {
    await page.goto('https://www.epam.com/');
  });

  await test.step('Open Services menu from the header', async () => {
    await page.getByRole('link', { name: 'Services' }).click();
  });

  await test.step('Click Explore Our Client Work link', async () => {
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  });

  await test.step('Verify Client Work text is visible', async () => {
    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });
});