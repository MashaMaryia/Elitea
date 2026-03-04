import { test, expect } from '@playwright/test';

test('show confirmation page after adding product to cart from PDP', async ({ page }) => {
  // GIVEN I am on a product detail page that shows an "Add to cart" button
  await page.goto('https://www.amazon.com/gp/product/B006KYZIC0/ref=ewc_pr_img_2?smid=ATVPDKIKX0DER&th=1');

  // WHEN I click the "Add to cart" button
  const addToCartButton = page.locator('#add-to-cart-button, input#add-to-cart-button').first();
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.scrollIntoViewIfNeeded();
  await addToCartButton.click();

  // THEN the system must display a confirmation page stating "Added to cart"
  await expect(page.getByText(/Added to cart/i)).toBeVisible();
});
