import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/auth/login?callbackUrl=/dashboard?tenant=tenant-test');
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('text=Sign in to continue')).toBeVisible();
  }

    async login(username: string, password: string) {
    const userField = this.page.locator('#username');
    const passField = this.page.locator('#password');

    // Wait for fields
    await userField.waitFor({ state: 'visible' });
    await passField.waitFor({ state: 'visible' });

    // Clear anything autofilled
    await userField.fill('');
    await passField.fill('');

    await userField.fill(username);
    await passField.fill(password);

    await this.page.click('button[type="submit"]');
  }


  async verifyLoginSuccess() {
  // 1. Wait until redirected to dashboard
  await this.page.waitForURL('**/dashboard**', { timeout: 20000 });

  // 2. Ensure login form is gone
  await expect(this.page.locator('#username')).toHaveCount(0);

  // 3. Ensure dashboard is loaded (by loading text disappearing)
  await this.page.waitForSelector('text=Loading dashboard...', { state: 'detached', timeout: 20000 });
}
}
