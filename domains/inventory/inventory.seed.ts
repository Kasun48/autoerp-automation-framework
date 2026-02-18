import { generateVehicles } from '../../core/aiDataGenerator';
import { APIClient } from '../../core/apiClient';

export async function seedInventory(count: number) {
  const vehicles = await generateVehicles(count);
  for (const v of vehicles) {
    await APIClient.post('/inventory', v);
  }
}
