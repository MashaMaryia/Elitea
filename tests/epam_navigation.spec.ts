import { test, expect } from '@playwright/test';

test('navigate to services and verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  // NOTE:
  // During manual execution via Playwright automation, https://www.epam.com/ returned
  // a Cloudflare "Performing security verification" page (title: "Just a moment...").
  // If that happens in CI, skip to avoid false negatives.
  if ((await page.title()).includes('Just a moment')) {
    test.skip(true, 'Blocked by Cloudflare security verification');
  }

  // Step 2: Select "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Step 3: Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});