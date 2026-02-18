import { Page, expect } from '@playwright/test';

export class CustomerPage {
  constructor(private page: Page) {}

  async openCreateCustomer() {
    await this.page.goto('/customers/create');
    await expect(this.page.locator('text=Add Customer')).toBeVisible();
  }

  async addCustomer(customer: any) {
    await this.page.fill('input[name="name"]', customer.name);
    await this.page.fill('input[name="email"]', customer.email);
    await this.page.fill('input[name="phone"]', customer.phone);
    await this.page.fill('input[name="address"]', customer.address);

    await this.page.click('button[type="submit"]');
  }

  async verifyCustomerCreated(name: string) {
    await this.page.goto('/customers');
    await expect(this.page.locator(`text=${name}`)).toBeVisible();
  }
}
