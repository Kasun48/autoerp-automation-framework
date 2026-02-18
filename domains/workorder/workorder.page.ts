import { Page } from '@playwright/test';

export class WorkOrderPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/workorders/create');
  }

  async createOrder(order: any) {
    await this.page.fill('#vehicleId', order.vehicleId);
    await this.page.fill('#parts', order.parts);
    await this.page.fill('#labor', order.labor.toString());
    await this.page.click('button[type="submit"]');
  }
}
