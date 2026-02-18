import { test } from '@playwright/test';
import { VehicleLookupPage } from './vehicle.lookup.page';

test('Search vehicle by VIN', async ({ page }) => {
  const lookupPage = new VehicleLookupPage(page);

  await lookupPage.openLookup();
  await lookupPage.searchByVin('TESTVIN123');
  await lookupPage.verifyResult('TESTVIN123');
});
