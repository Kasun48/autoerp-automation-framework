import { Page, expect } from '@playwright/test';

export class VehiclePage {
  constructor(private page: Page) {}

  async openCreateVehicle() {
    await this.page.goto('/vehicles/create');
    await expect(this.page).toHaveTitle(/Vehicle/);
  }

  async addVehicle(vehicle: any) {
    await this.page.fill('input[name="vin"]', vehicle.vin);
    await this.page.fill('input[name="model"]', vehicle.model);
    await this.page.fill('input[name="mileage"]', vehicle.mileage.toString());

    await this.page.click('button[type="submit"]');
  }

  async verifyVehicleCreated(vin: string) {
    await this.page.goto('/vehicles');
    await expect(this.page.locator(`text=${vin}`)).toBeVisible();
  }
}
