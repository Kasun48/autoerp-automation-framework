https://api.uat.tachyoniclabs.com
``` :contentReference[oaicite:3]{index=3}

```ts
import { APIClient } from '../../core/apiClient';

export class InventoryAPI {
  static async addVehicle(vehicle: any) {
    return APIClient.post('/inventory', vehicle);
  }

  static async getVehicles() {
    return APIClient.get('/inventory');
  }
}
