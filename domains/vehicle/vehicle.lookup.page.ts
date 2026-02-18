import { Page, expect } from '@playwright/test';

export class VehicleLookupPage {
  constructor(private page: Page) {}

  async openLookup() {
    await this.page.goto('/vehicles/lookup');
    await expect(this.page).toHaveTitle(/Vehicle Lookup/);
  }

  async searchByVin(vin: string) {
    await this.page.fill('input[name="vin"]', vin);
    await this.page.click('button:has-text("Search")');
  }

  async verifyResult(vin: string) {
    await expect(this.page.locator(`text=${vin}`)).toBeVisible();
  }
}
