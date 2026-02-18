import { test } from '@playwright/test';
import { CustomerPage } from './customer.page';
import { DataFactory } from '../../core/dataFactory';

test('@smoke @regression Create new customer', async ({ page }) => {
  const customerPage = new CustomerPage(page);
  const customer = DataFactory.createCustomer();

  await customerPage.openCreateCustomer();
  await customerPage.addCustomer(customer);
  await customerPage.verifyCustomerCreated(customer.name);
});
