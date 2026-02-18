import { test, expect } from '@playwright/test';

test('navigate to services and verify Client Work page', async ({ page }) => {
  // Step 1: Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Access the "Services" section
  await page.click('text=Services');

  // Step 3: Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Step 4: Verify the Client Work text is visible on the page
  await expect(page.getByText('Client Work')).toBeVisible();
});