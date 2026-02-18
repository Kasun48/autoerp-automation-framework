import { test, expect } from '@playwright/test';
import { WorkOrderAPI } from '../domains/workorder/workorder.api';

test('Order integrates with Billing', async () => {
  const order = { vehicleId: '2', parts: 'Oil Change', labor: 1 };
  const response = await WorkOrderAPI.create(order);
  expect(response.data.billingStatus).toBe('CREATED');
});
