import { test } from '@playwright/test';
import { VehiclePage } from './vehicle.page';
import { DataFactory } from '../../core/dataFactory';

test('@regression Create new vehicle', async ({ page }) => {
  const vehiclePage = new VehiclePage(page);
  const vehicle = DataFactory.createVehicle();

  await vehiclePage.openCreateVehicle();
  await vehiclePage.addVehicle(vehicle);
  await vehiclePage.verifyVehicleCreated(vehicle.vin);
});
