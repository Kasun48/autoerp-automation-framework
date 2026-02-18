import { test, expect } from '@playwright/test';
import { WorkOrderPage } from './workorder.page';
import { WorkOrderAPI } from './workorder.api';

test('Create Work Order UI + API', async ({ page }) => {
  const order = { vehicleId: '1', parts: 'Brake Pads', labor: 2 };

  const wp = new WorkOrderPage(page);
  await wp.open();
  await wp.createOrder(order);

  const response = await WorkOrderAPI.create(order);
  expect(response.status).toBe(201);
});
