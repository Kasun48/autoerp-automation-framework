import { test, expect } from '@playwright/test';

test('@smoke Dashboard loads successfully', async ({ page }) => {
  await page.goto('/dashboard');

  // verify dashboard UI instead of title
  await expect(page.locator('text=Dashboard')).toBeVisible();
});
